import React from "react"
import styled from "styled-components"

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
      <StyledHeader src={logo} alt="outbreak-logo" />
    </StyledContainer>
  )
}

export default Header
