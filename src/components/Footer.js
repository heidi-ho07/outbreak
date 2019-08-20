import React from "react"
import styled from "styled-components"
import { Link, withRouter } from "react-router-dom"

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const StyledHomeBtn = styled.i`
  color: #414141;
  margin: 20px;
`

const StyledGlobeBtn = styled.i`
  color: #414141;
  margin: 20px;
`
function Footer({ history }) {
  return (
    <>
      <StyledContainer>
        <Link to="/home">
          <StyledHomeBtn className="fas fa-home fa-2x" />
        </Link>
        <Link to="/overview">
          <StyledGlobeBtn className="fas fa-globe fa-2x" />
        </Link>
      </StyledContainer>
    </>
  )
}

export default withRouter(Footer)
