import ContentsWrapper from "@/components/Template/ContentsWrapper";
import React from "react";
import styled from "styled-components";
import Detail from "./Detail";
import Summary from "./Summary";
import Divider from "@/components/Divider";
import Description from "./Description";
import { COLORS } from "@/style/colors";

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    max-width: 600px;
    padding: 40px;
    background: ${COLORS.glassBg};
    backdrop-filter: blur(16px);
    border: 1px solid ${COLORS.glassBorder};
    border-radius: 24px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
    margin: 40px 0;
  `,
};

const Container = () => {
  return (
    <ContentsWrapper>
      <S.Container>
        <Detail />
        <Divider vertical={50} />
        <Summary />
        <Divider vertical={50} />
        <Description />
      </S.Container>
    </ContentsWrapper>
  );
};

export default Container;
