import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import logo from "../images/outbreak-logo.png"
import Menu from "../components/Menu"

const StyledHeader = styled.img`
  height: 120px;
  width: 120px;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function Header(props) {
  return (
    <>
      <Menu />
      <StyledContainer>
        <Link to="/">
          <StyledHeader src={logo} alt="outbreak-logo" />
        </Link>
      </StyledContainer>
    </>
  )
}

export default Header
