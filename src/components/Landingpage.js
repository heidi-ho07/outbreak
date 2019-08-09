import React from "react"
import styled from "styled-components"

import backpacker from "../images/backpacker-running.svg"
import logo from "../images/logo.svg"

const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
`

const StyledBackpacker = styled.img`
  width: 80px;
  position: absolute;
  z-index: 3;
  top: 235px;
  left: 150px;
`

const StyledLogo = styled.img`
  width: 380px;
  margin-top: 150px;
  position: absolute;
  z-index: 2;
`

function Landingpage() {
  return (
    <>
      <StyledContainer>
        <div>
          <StyledBackpacker src={backpacker} alt="running-backpacker" />
        </div>
        <div>
          <StyledLogo src={logo} alt="logo-squares" />
        </div>
      </StyledContainer>
    </>
  )
}

export default Landingpage
