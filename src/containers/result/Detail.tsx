import Divider from "@/components/Divider";
import Text from "@/components/Text";
import { SA_JU_ELEMENT, SA_JU_KOREAN_ELEMENT } from "@/lib/saju";
import { useUserStore } from "@/store";
import { COLORS } from "@/style/colors";
import { COLORS_SA_JU } from "@/style/saju";
import React from "react";
import styled from "styled-components";

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 10px;
  `,
  Column: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ColorBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 110px;
    border: 1px solid ${COLORS.black};
  `,
};

const Detail = () => {
  const { user } = useUserStore();

  const renderColumn = (title: string, timeLine: string) => {
    const firstValue = SA_JU_ELEMENT[timeLine[0]];
    const secondValue = SA_JU_ELEMENT[timeLine[1]];
    return (
      <S.Column>
        <Divider vertical={15} />
        <Text fontSize={20} fontWeight={400} color={COLORS.black}>
          {title}
        </Text>
        <Divider vertical={15} />
        <S.ColorBox
          style={{
            backgroundColor: COLORS_SA_JU[firstValue],
          }}
        >
          <Text fontSize={40} fontWeight={400} color={COLORS.black}>
            {SA_JU_KOREAN_ELEMENT[firstValue]}
          </Text>
        </S.ColorBox>
        <Divider vertical={15} />
        <S.ColorBox
          style={{
            backgroundColor: COLORS_SA_JU[secondValue],
          }}
        >
          <Text fontSize={40} fontWeight={400} color={COLORS.black}>
            {SA_JU_KOREAN_ELEMENT[secondValue]}
          </Text>
        </S.ColorBox>
      </S.Column>
    );
  };

  if (!user?.saju) {
    return <></>;
  }

  return (
    <S.Container>
      {renderColumn("시주", user?.saju.hour)}
      {renderColumn("일주", user?.saju.day)}
      {renderColumn("월주", user?.saju.month)}
      {renderColumn("년주", user?.saju.year)}
    </S.Container>
  );
};

export default Detail;
