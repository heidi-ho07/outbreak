import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledContainer = styled.div`
  min-height: 100%;
`

const StyledFooter = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #bbded6;
  border: 6px solid #bbded6;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`

const StyledHome = styled.i`
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  padding: 5px;
  margin: 3px;
  box-shadow: 0 5px 15px -5px #00000070;
  transition: 0.2s linear;

  &:hover {
    transform: scale(1.3);
  }
`

const StyledGlobe = styled.i`
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  padding: 5px;
  margin: 3px;
  box-shadow: 0 5px 15px -5px #00000070;
  transition: 0.2s linear;

  &:hover {
    transform: scale(1.3);
  }
`

const StyledEdit = styled.i`
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  padding: 5px;
  margin: 3px;
  margin-right: 13px;
  box-shadow: 0 5px 15px -5px #00000070;
  transition: 0.2s linear;

  &:hover {
    transform: scale(1.3);
  }
`

function Footer() {
  return (
    <>
      <StyledContainer>
        <StyledFooter>
          <Link to="/">
            <StyledHome className="fas fa-home fa-2x" />
          </Link>
          <Link to="/overview">
            <StyledGlobe className="fas fa-globe fa-2x" />
          </Link>
          <Link to="/form">
            <StyledEdit className="fas fa-edit fa-2x" />
          </Link>
        </StyledFooter>
      </StyledContainer>
    </>
  )
}

export default Footer
