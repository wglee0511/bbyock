import React from "react";

import styled, { css } from "styled-components";

import { TextProps, TextStyleProps } from "./type";

const S = {
  Container: styled.div<TextStyleProps>`
    display: flex;
    font-family: "Pretendard";
    font-size: ${(props) => props.fontSize}px;
    font-weight: ${(props) => props.fontWeight};
    text-align: ${(props) => props.textAlign};
    line-height: ${(props) => props.lineHeight};
    white-space: ${(props) => props.whiteSpace};
    word-break: ${(props) => props.wordBreak};
    letter-spacing: ${(props) => props.letterSpacing};
    color: ${(props) => props.color};
    justify-content: ${(props) =>
      props.justifyContent ? props.justifyContent : "flex-start"};
    align-items: ${(props) => (props.alignItems ? props.alignItems : "normal")};
    text-decoration: ${(props) => props.textDecoration};

    ${(props) =>
      props.maxWidth &&
      css`
        max-width: ${props.maxWidth};
      `};

    ${(props) =>
      props.numberOfLines &&
      props.numberOfLines > 1 &&
      css`
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: ${props.numberOfLines};
        -webkit-box-orient: vertical;
        word-wrap: break-word;
      `};

    ${(props) =>
      props.numberOfLines === 1 &&
      css`
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `}
  `,
};

/**
 * @component
 * 텍스트
 *
 * @params
 * maxWidth - ellipsis를 위해서 설정해야 한다. numberOfLines와 같이 사용해야 한다.
 *
 * @example
 * <Text
 *   typography="body1"                   // required
 *   fontWeight="medium"                  // required
 *   color={TEXT_COLORS.textPrimary}      // optional
 *   textAlign="center"                   // optional
 *   whiteSpace=''                        // optional
 *   wordBreak=''                         // optional
 *   letterSpacing=''                     // optional
 *   justifyContent=''                    // optional
 *   alignItems=''                        // optional
 *   className=''                         // optional
 *   numberOfLines={1}                    // optional
 * >
 *   Text
 * </Text>
 */
const Text = ({
  fontSize = 16,
  fontWeight,
  isNoneLineHeight = false,
  color = "black",
  className,
  children,
  ...props
}: React.PropsWithChildren<TextProps>) => {
  return (
    <S.Container
      fontSize={fontSize}
      lineHeight={`${fontSize * (isNoneLineHeight ? 1 : 1.6)}px`}
      fontWeight={fontWeight}
      color={color}
      className={className}
      {...props}
    >
      {children}
    </S.Container>
  );
};

export default Text;
