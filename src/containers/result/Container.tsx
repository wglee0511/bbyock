import ContentsWrapper from "@/components/Template/ContentsWrapper";
import React from "react";
import styled from "styled-components";
import Detail from "./Detail";
import Summary from "./Summary";
import Divider from "@/components/Divider";

const S = {
  Container: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: calc(100vh - 170px);
  `,
};

const Container = () => {
  return (
    <ContentsWrapper>
      <S.Container>
        <Detail />
        <Divider vertical={57} />
        <Summary />
      </S.Container>
    </ContentsWrapper>
  );
};

export default Container;
