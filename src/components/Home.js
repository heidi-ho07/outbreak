import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import headerImg from "../images/dream.png"
import Button from "./Button"

const StyledHeader = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 1.5em;
  letter-spacing: 0.5em;
  line-height: 1.5;
  color: #414141;
`

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 30px;
  box-shadow: 0 5px 15px -5px #00000070;
`

const StyledContent = styled.div`
  font-size: 1em;
  padding: 10px;
  margin-bottom: 30px;
  line-height: 1.5;
  color: #414141;
`
const StyledContainer = styled.div`
  padding: 18px;
  text-align: center;
`
const StyledIconPen = styled.i`
  color: white;
  padding: 5px 5px 5px 20px;
  margin-left: 15px;
  border-left: 2px solid #bbded6;
`

function Home() {
  return (
    <>
      <StyledImg src={headerImg} alt="dream-image" />
      <StyledContainer>
        <StyledHeader>Welcome to Outbreak</StyledHeader>
        <StyledContent>
          Hallo ich bin Outbreak - dein Reisetagebuch.
        </StyledContent>

        <StyledContent>
          Ich bin super gespannt auf deine Erlebnisse. Klicke auf den Button und
          fange an mir von deinen Abenteuern zu erzählen.
        </StyledContent>
        <Link to="/overview">
          <Button>
            Reisetagebuch schreiben
            <StyledIconPen className="fas fa-pencil-alt fa-lg" />
          </Button>
        </Link>
      </StyledContainer>
    </>
  )
}

Home.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string
}

export default Home
