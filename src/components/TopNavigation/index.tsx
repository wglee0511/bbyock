import Divider from "@/components/Divider";
import Text from "@/components/Text";
import { COLORS } from "@/style/colors";
import React from "react";
import styled from "styled-components";
import { TopNavigationProps } from "./type";

const S = {
  container: styled.header`
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${COLORS.glassBg};
    backdrop-filter: blur(12px);
    border-bottom: 1px solid ${COLORS.glassBorder};
    position: sticky;
    top: 0;
    z-index: 50;
  `,
  Inner: styled.div`
    display: flex;
    align-items: flex-end;
  `,
};

const TopNavigation = ({ title }: TopNavigationProps) => {
  return (
    <S.container>
      <S.Inner>
        <Text
          fontSize={45}
          fontWeight={700}
          color={COLORS.primary}
          isNoneLineHeight
        >
          뾲
        </Text>
        <Divider horizontal={22} />
        <Text fontSize={20} fontWeight={400} color={COLORS.gray100}>
          {title}
        </Text>
      </S.Inner>
    </S.container>
  );
};

export default TopNavigation;
