import Divider from "@/components/Divider";
import Text from "@/components/Text";
import { SA_JU_KOREAN_ELEMENT, SajuKey } from "@/lib/saju";
import { useUserStore } from "@/store";
import { COLORS } from "@/style/colors";
import { COLORS_SA_JU } from "@/style/saju";
import { isNil, map } from "lodash";
import React from "react";
import styled from "styled-components";

const S = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
  `,
  Column: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  CircleContainer: styled.div`
    display: flex;
    gap: 10px;
  `,
  Circle: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  `,
};

const Summary = () => {
  const { user } = useUserStore();

  const renderSummary = (
    title: string,
    elements: (SajuKey | undefined)[],
    bottom?: string,
  ) => {
    return (
      <S.Column>
        <Text fontSize={20} fontWeight={400} color={COLORS.black}>
          {title}
        </Text>
        <Divider vertical={20} />
        <S.CircleContainer>
          {map(elements, (element) => {
            if (isNil(element)) {
              return <></>;
            }

            return (
              <S.Circle
                style={{
                  backgroundColor: COLORS_SA_JU[element],
                }}
              >
                <Text
                  fontSize={35}
                  fontWeight={400}
                  color={element === "water" ? COLORS.white : COLORS.black}
                >
                  {SA_JU_KOREAN_ELEMENT[element]}
                </Text>
              </S.Circle>
            );
          })}
        </S.CircleContainer>
        <Divider vertical={20} />
        {bottom && (
          <Text fontSize={20} fontWeight={400} color={COLORS.black}>
            {bottom}
          </Text>
        )}
      </S.Column>
    );
  };

  if (!user?.result) {
    return <></>;
  }

  return (
    <S.Container>
      {renderSummary("나의 오행", [user.result.dominantElement])}
      {renderSummary("필요한 오행", [user.result.neededElement], "추천")}
      {renderSummary(
        "피해야하는 오행",
        [user.result.avoidedElement, user.result.oppositeElement],
        "비추",
      )}
    </S.Container>
  );
};

export default Summary;
