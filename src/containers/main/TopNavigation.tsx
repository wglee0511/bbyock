import { COLORS } from '@/style/colors'
import React from 'react'
import styled from 'styled-components'

const S = {
  container: styled.div`
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.gray100};
  `
}

const TopNavigation = () => {
  return (
    <S.container>TopNavigation</S.container>
  )
}

export default TopNavigation