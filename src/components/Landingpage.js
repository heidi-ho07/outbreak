import React from "react"
import styled from "styled-components"

import headerImg from "../images/dream.png"

const StyledHeader = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 1.5em;
`

const StyledImg = styled.img`
  height: 100%;
`

function Landingpage() {
  return (
    <>
      <StyledImg className="headerImg" src={headerImg} alt="dream-image" />
      <StyledHeader>Welcome to Outbreak</StyledHeader>
    </>
  )
}

export default Landingpage
