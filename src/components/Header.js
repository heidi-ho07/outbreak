import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import logo from "../images/outbreak-logo.png"

const StyledHeader = styled.img`
  height: 100px;
  width: 100px;
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function Header() {
  return (
    <StyledContainer>
      <Link to="/">
        <StyledHeader src={logo} alt="outbreak-logo" />
      </Link>
    </StyledContainer>
  )
}

export default Header
