import ContentsWrapper from "@/components/Template/ContentsWrapper";
import { CONTENT_MAX_WIDTH } from "@/style/base";
import React from "react";
import styled from "styled-components";
import Detail from "./Detail";

const S = {
  Container: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: ${CONTENT_MAX_WIDTH}px;
    height: calc(100vh - 170px);
  `,
};

const Container = () => {
  return (
    <ContentsWrapper>
      <S.Container>
        <Detail />
      </S.Container>
    </ContentsWrapper>
  );
};

export default Container;
