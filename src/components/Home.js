import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import headerImg from "../images/dream.png"
import logo from "../images/LogoOutbreak.png"
import Button from "./Button"
import Header from "./Header"

const StyledImgLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImg = styled.img`
  height: auto;
  width: 200%;
  padding: 0;
  margin-bottom: 30px;
  box-shadow: 0 5px 15px -5px #00000070;
  z-index: 1;
  position: relative;
  display: flex;
`

const StyledLogo = styled.img`
  width: 60%;
  z-index: 2;
  position: absolute;
  top: 30px;
  color: white;
`
const StyledHeader = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: 6px;
  color: #414141;
  margin-bottom: 10px;
`

const StyledContent = styled.div`
  font-size: 20px;
  padding: 10px;
  margin-bottom: 20px;
  line-height: 1.5;
  color: #414141;
`
const StyledContainer = styled.div`
  padding: 18px;
  text-align: center;
`
const StyledGlobe = styled.i`
  color: #414141;
  padding: 10px 10px 10px 20px;
  margin-left: 15px;
  border-left: 2px solid #e28273;
`

function Home() {
  return (
    <>
      {/* <Header /> */}
      <StyledImgLogo>
        <StyledImg src={headerImg} alt="dream-image" />
        <StyledLogo src={logo} alt="dream-image" />
      </StyledImgLogo>
      <StyledContainer>
        <StyledHeader>Don't call it a dream - call it a plan</StyledHeader>
        <StyledContent>
          Hallo ich bin Outbreak - dein persönliches Reisetagebuch.
        </StyledContent>
        <StyledContent>
          Ich bin super gespannt auf deine Erlebnisse. Klicke auf den Button und
          fange an mir von deinen Abenteuern zu erzählen.
        </StyledContent>
        <Link to="/overview">
          <Button>
            Übersicht Länder
            <StyledGlobe className="fas fa-globe fa-lg" />
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
