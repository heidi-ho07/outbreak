import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import Button from "./Button"
import headerImg from "../images/summary.png"
import logo from "../images/LogoOutbreak.png"
import Footer from "../components/Footer"

const StyledImgLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImg = styled.img`
  height: 70vh;
  width: 100vw;
  padding: 0;
  object-fit: cover;
  margin-bottom: 30px;
  box-shadow: 0 5px 15px -5px #00000070;
  z-index: 1;
  position: relative;
`

const StyledLogo = styled.img`
  width: 60%;
  z-index: 2;
  position: absolute;
  top: 30px;
  color: white;
`

const StyledText = styled.div`
  border: 2px solid #e28273;
  border-radius: 2px;
  padding: 20px;
  box-shadow: 0 5px 10px -5px #00000070;
  margin: 18px;
`

const StyledHeadline = styled.h1`
  color: white;
  font-family: "Dancing Script", cursive;
  font-weight: 700;
  font-size: 60px;
  z-index: 3;
  position: absolute;
  bottom: 265px;
`

const StyledContainerImage = styled.div`
  display: flex;
  justify-content: center;
`

const StyledUploadedImage = styled.img`
  width: 345px;
  border: 2px solid #e28273;
  border-radius: 2px;
  box-shadow: 0 5px 10px -5px #00000070;
  margin-bottom: 30px;
`

const StyledIconPen = styled.i`
  text-decoration: none;
  color: #414141;
  padding: 10px 10px 10px 20px;
  margin-left: 15px;
  border-left: 2px solid #e28273;
`

const StyledContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledButton = styled(Button)`
  margin: 17px;
`

const StyledBackBtn = styled.i`
  color: white;
  z-index: 4;
  position: absolute;
  top: 20px;
  padding-left: 10px;
`

function Summary(props) {
  const [experience] = React.useState(
    JSON.parse(localStorage.getItem("experiences")).find(experience => {
      return experience.id === props.match.params.id
    })
  )

  function handleClick(event) {
    event.preventDefault()
    props.history.push(`/form/edit/${experience.id}`)
  }

  function handleClickBack() {
    window.history.back()
  }

  return (
    <>
      <StyledImgLogo>
        <StyledImg src={headerImg} alt="sunset-image" />
        <StyledLogo src={logo} alt="logo" />
        <StyledHeadline>{experience.title}</StyledHeadline>
      </StyledImgLogo>
      <StyledBackBtn
        onClick={handleClickBack}
        className="fas fa-angle-left fa-2x"
      />
      <Link to="/form">
        <StyledContainerBtn>
          <StyledButton onClick={handleClick}>
            Bearbeiten
            <StyledIconPen className="fas fa-pencil-alt fa-lg" />
          </StyledButton>
        </StyledContainerBtn>
      </Link>
      <StyledText>{experience.content}</StyledText>
      <StyledContainerImage>
        <StyledUploadedImage src={experience.image} alt="" />
      </StyledContainerImage>
      <Footer />
    </>
  )
}

export default Summary
