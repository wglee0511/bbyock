import Divider from "@/components/Divider";
import ContentsWrapper from "@/components/Template/ContentsWrapper";
import Text from "@/components/Text";
import {
  DateOfBirth,
  SaJu,
  SajuElementCounts,
  analyzeElements,
  calculateSaJu,
  getElementCounts,
} from "@/lib/saju";
import { CONTENT_MAX_WIDTH } from "@/style/base";
import { COLORS } from "@/style/colors";
import { map } from "lodash";
import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const S = {
  Container: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: ${CONTENT_MAX_WIDTH}px;
    height: calc(100vh - 170px);
  `,
  Form: styled.form`
    width: 100%;
  `,
  Input: styled.input``,
  TextInput: styled.input`
    min-width: 287px;
  `,
  NumberInput: styled.input`
    flex: 1;
  `,
  InputContainer: styled.div`
    width: 100%;
    height: 96px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  ContentsContainer: styled.div`
    width: 80%;
    display: flex;
    gap: 20px;
  `,
  SummitButton: styled.input`
    width: 200px;
    height: 55px;
    font-size: 20px;
    color: ${COLORS.white};
    font-weight: 400;
    border: none;
    border-radius: 20px;
    background-color: ${COLORS.green};
  `,
};

const Contents = () => {
  const { register, handleSubmit } = useForm();

  const genders: Gender[] = ["male", "female"];

  const onSubmitForm = handleSubmit((data) => {
    console.log("data: ", data);
  });

  const WithLabel = ({
    text,
    components,
  }: {
    text: string;
    components:
      | React.JSX.Element
      | ReactElement<any, any>
      | React.JSX.Element[];
  }) => (
    <S.InputContainer>
      <Text fontSize={20} fontWeight={400} color={COLORS.black}>
        {text}
      </Text>
      <S.ContentsContainer>{components}</S.ContentsContainer>
    </S.InputContainer>
  );

  const renderGenders = (list: Gender[]) =>
    map(list, (gender) => {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
          key={gender}
        >
          <S.Input
            type="radio"
            value={gender}
            {...register("gender", {
              required: true,
            })}
          />
          <Divider horizontal={15} />
          <Text fontSize={20} fontWeight={400} color={COLORS.black}>
            {gender}
          </Text>
        </div>
      );
    });

  return (
    <ContentsWrapper>
      <S.Container>
        <S.Form onSubmit={onSubmitForm}>
          {WithLabel({ text: "성별", components: renderGenders(genders) })}
          {WithLabel({
            text: "이름",
            components: (
              <S.TextInput
                type="text"
                {...register("name", { required: true })}
              />
            ),
          })}
          {WithLabel({
            text: "생년월일",
            components: (
              <div style={{ display: "flex", alignItems: "center" }}>
                <S.TextInput
                  type="date"
                  {...register("birthDate", { required: true })}
                />
                <Divider horizontal={20} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <S.Input type="checkbox" {...register("isLunar")} />
                  <Divider horizontal={15} />
                  <Text fontSize={20} fontWeight={400} color={COLORS.black}>
                    음력
                  </Text>
                </div>
                <Divider horizontal={20} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <S.Input type="checkbox" {...register("isLeapYear")} />
                  <Divider horizontal={15} />
                  <Text fontSize={20} fontWeight={400} color={COLORS.black}>
                    윤달
                  </Text>
                </div>
              </div>
            ),
          })}
          {WithLabel({
            text: "시간",
            components: (
              <div style={{ display: "flex", alignItems: "center" }}>
                <S.NumberInput
                  type="number"
                  {...register("hour", { required: true, max: 24 })}
                />
                <Text fontSize={20} fontWeight={400} color={COLORS.black}>
                  :
                </Text>
                <S.NumberInput
                  type="number"
                  {...register("minute", { required: true, max: 60 })}
                />
                <Divider horizontal={20} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <S.Input type="checkbox" {...register("hasBirthDateTime")} />
                  <Divider horizontal={15} />
                  <Text fontSize={20} fontWeight={400} color={COLORS.black}>
                    모름
                  </Text>
                </div>
              </div>
            ),
          })}
          <Divider vertical={90} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <S.SummitButton type="submit" value="오행분석하기" />
          </div>
        </S.Form>
      </S.Container>
    </ContentsWrapper>
  );
};

export default Contents;
