import React from "react"
import styled from "styled-components"

import logo from "../images/outbreak-logo.png"

const StyledHeader = styled.img`
  height: 100px;
  width: 100px;
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /*align vertical */
  flex-direction: column;
`

function Header() {
  return (
    <StyledContainer>
      <StyledHeader className="outbreak-logo" src={logo} alt="outbreak-logo" />
    </StyledContainer>
  )
}

export default Header
