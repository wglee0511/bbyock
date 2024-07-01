import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const S = {
  Container: styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

const ContentsWrapper = ({ children }: PropsWithChildren) => {
  return <S.Container>{children}</S.Container>;
};

export default ContentsWrapper;
