import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import styled from "styled-components";

const S = {
  Container: styled.div`
    flex: 1;
    width: 100vw;
    height: 100vh;
    position: relative;
    font-size: 30px;
    font-weight: 700;
    overflow-y: scroll;
  `,
};

const Main = () => {
  const TopNavigation = dynamic(() => import("@/components/TopNavigation"), {
    ssr: false,
  });

  const Contents = dynamic(() => import("@/containers/main/Contents"), {
    ssr: false,
  });

  return (
    <S.Container>
      <TopNavigation title="부족한 오행을 채워주는 소품샵" />
      <Contents />
    </S.Container>
  );
};

export default Main;
