import React from "react"
import styled from "styled-components"

import headerImg from "../images/dream.png"
import Button from "./Button"

const StyledHeader = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 1.5em;
  letter-spacing: 0.5em;
`

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`

const StyledContent = styled.div`
  font-size: 1em;
  padding: 10px;
  margin-bottom: 10px;
`
const StyledContainer = styled.div`
  padding: 18px;
  border-top: 2px solid #414141;
  border-bottom: 2px solid #414141;
  border-radius: 4px;
  position: relative;
  text-align: center;
`

function Landingpage() {
  return (
    <>
      <StyledImg src={headerImg} alt="dream-image" />
      <StyledContainer>
        <StyledHeader>Welcome to Outbreak</StyledHeader>
        <StyledContent>
          Hallo ich bin Outbreak dein Reisetagebuch.
        </StyledContent>

        <StyledContent>
          Ich bin super gespannt auf deine Erlebnisse. Klicke auf den Button und
          fange an mir von deinen Abenteuern zu erzählen.
        </StyledContent>
        <Button />
      </StyledContainer>
    </>
  )
}

export default Landingpage
