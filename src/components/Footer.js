import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledContentContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #bbded6;
  border: 6px solid #bbded6;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`

const StyledHome = styled.i`
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  padding: 5px;
`

const StyledGlobe = styled.i`
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  padding: 5px;
`

const StyledEdit = styled.i`
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  padding: 5px;
`

function Footer() {
  return (
    <>
      <StyledContentContainer>
        <Link to="/">
          <StyledHome className="fas fa-home fa-2x" />
        </Link>
        <Link to="/overview">
          <StyledGlobe className="fas fa-globe fa-2x" />
        </Link>
        <Link to="/form">
          <StyledEdit className="fas fa-edit fa-2x" />
        </Link>
      </StyledContentContainer>
    </>
  )
}

export default Footer
