import React, { useState } from "react"
import styled from "styled-components"

import headerImg from "../images/country.png"

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`

function Country() {
  return <StyledImg src={headerImg} alt="travel-diary image" />
}

export default Country
