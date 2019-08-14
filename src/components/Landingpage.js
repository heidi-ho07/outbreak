import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import backpacker from "../images/backpacker-running.svg"
import logo from "../images/logo.svg"
import { fadeIn } from "../utils/animation.js"

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
  animation: ${fadeIn} 3s ease-out infinite;
`

const StyledLogo = styled.img`
  width: 340px;
  margin-top: 150px;
  position: absolute;
  z-index: 2;
  margin-left: 19px;
`

function Landingpage() {
  return (
    <>
      <StyledContainer>
        <Link to="/home">
          <div>
            <StyledBackpacker src={backpacker} alt="running-backpacker" />
          </div>
          <div>
            <StyledLogo src={logo} alt="logo-squares" />
          </div>
        </Link>
      </StyledContainer>
    </>
  )
}

export default Landingpage
