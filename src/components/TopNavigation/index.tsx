import Divider from "@/components/Divider";
import Text from "@/components/Text";
import { COLORS } from "@/style/colors";
import React from "react";
import styled from "styled-components";
import { TopNavigationProps } from "./type";

const S = {
  container: styled.div`
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.gray100};
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
          color={COLORS.black}
          isNoneLineHeight
        >
          뾲
        </Text>
        <Divider horizontal={22} />
        <Text fontSize={20} fontWeight={400} color={COLORS.black}>
          {title}
        </Text>
      </S.Inner>
    </S.container>
  );
};

export default TopNavigation;
