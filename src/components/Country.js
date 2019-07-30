import React, { useState } from "react"
import styled from "styled-components"

import headerImg from "../images/country.png"

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`

const StyledContainer = styled.div`
  text-align: center;
`

const StyledOverview = styled.div`
  text-align: center;
  font-size: 12px;
`

function Country() {
  return (
    <>
      <StyledImg src={headerImg} alt="travel-diary image" />

      <StyledOverview>Beiträge (3)</StyledOverview>
      <StyledContainer>
        <p>2019/07/01 - Bangkok</p>
        <p>2019/07/07 - Chiang Mai</p>
        <p>2019/07/15 - Koh Samui</p>
      </StyledContainer>
    </>
  )
}

export default Country
