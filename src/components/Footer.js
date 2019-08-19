import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const StyledHomeBtn = styled.i`
  color: #414141;
  margin: 20px;
  &:hover {
    transform: scale(1.3);
    color: #e28273;
  }
`

const StyledGlobeBtn = styled.i`
  color: #414141;
  margin: 20px;
  &:hover {
    transform: scale(1.3);
    color: #e28273;
  }
`
function Footer({ history }) {
  //   function handleClickHome() {
  //     history.push("/")
  //   }
  return (
    <>
      <StyledContainer>
        <Link to="/home">
          <StyledHomeBtn
            //   onClick={handleClickHome}
            className="fas fa-home fa-2x"
          />
        </Link>

        <Link to="/overview">
          <StyledGlobeBtn className="fas fa-globe fa-2x" />
        </Link>
      </StyledContainer>
    </>
  )
}

export default Footer
