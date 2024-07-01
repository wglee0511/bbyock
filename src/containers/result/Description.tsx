import Divider from "@/components/Divider";
import Text from "@/components/Text";
import { SA_JU_KOREAN_ELEMENT, SajuKey } from "@/lib/saju";
import { useUserStore } from "@/store";
import { COLORS } from "@/style/colors";
import { COLORS_SA_JU_KOREAN } from "@/style/saju";
import { isNil } from "lodash";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const S = {
  Container: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
  Wrapper: styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
  `,
  Button: styled.a`
    border-radius: 20px;
    padding: 15px 40px;
    background-color: ${COLORS.green};
  `,
};

const Description = () => {
  const { user } = useUserStore();

  const koreanText = (value: SajuKey) => SA_JU_KOREAN_ELEMENT[value];

  if (isNil(user)) {
    return <></>;
  }

  return (
    <S.Container>
      <Text fontSize={20} fontWeight={400} color={COLORS.black}>
        오행 분석결과
      </Text>
      <Divider vertical={21} />
      <Text fontSize={20} fontWeight={400} color={COLORS.black}>
        {`${user.name || ""}님의 오행은 ‘${koreanText(user.result.dominantElement)}’이며, 오행중 ‘${koreanText(user.result.dominantElement)}’가 많고 ‘${koreanText(user.result.neededElement || "earth")}’(이)가 부족합니다. `}
      </Text>
      <Divider vertical={21} />
      <Text fontSize={20} fontWeight={400} color={COLORS.black}>
        {`${user.name || ""}님은 ‘${koreanText(user.result.dominantElement)}’의 기운을 빼주는 ‘${koreanText(user.result.redeemElement)}’와 부족한 오행 ‘${koreanText(user.result.neededElement || "earth")}’를 채워 주면 좋습니다.`}
      </Text>
      <Divider vertical={21} />
      <Text fontSize={20} fontWeight={400} color={COLORS.black}>
        {`추천하는 색: ${COLORS_SA_JU_KOREAN[user.result.neededElement || "earth"]} / ${COLORS_SA_JU_KOREAN[user.result.redeemElement]}`}
      </Text>
      <Divider vertical={44} />
      <Link
        style={{ width: "100%", textDecorationLine: "none" }}
        href="https://m.naver.com"
      >
        <S.Wrapper>
          <S.Button target="_blank" rel="noopener noreferrer">
            <Text fontSize={20} fontWeight={400} color={COLORS.white}>
              부족한 오행 소품 구매하러 가기
            </Text>
          </S.Button>
        </S.Wrapper>
      </Link>
      <Divider vertical={31} />
    </S.Container>
  );
};

export default Description;
