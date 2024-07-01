import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import Container from "@/containers/result/Container";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store";
import { isNil } from "lodash";

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

const Result = () => {
  const router = useRouter();
  const { user } = useUserStore();

  const TopNavigation = dynamic(() => import("@/components/TopNavigation"), {
    ssr: false,
  });

  useEffect(() => {
    if (isNil(user)) {
      router.push("/");
    }
  }, [user]);

  return (
    <S.Container>
      <TopNavigation title="오행 분석결과" />
      <Container />
    </S.Container>
  );
};

export default Result;
