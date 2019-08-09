import React from "react"
import styled from "styled-components"

import headerImg from "../images/summary.png"

const StyledText = styled.div`
  border: 2px solid #8bbabb;
  border-radius: 5px;
  padding: 20px;
  margin: 15px;
  box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.25);
`

const StyledHeadline = styled.h1`
  color: white;
`

const StyledHeader = styled.div`
  background-image: url(${headerImg});
  background-size: 100%;
  height: 142px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  filter: grayscale(20%);
  box-shadow: 0 5px 15px -5px #00000070;
`

const StyledContainerImage = styled.div`
  display: flex;
  justify-content: center;
`

const StyledUploadedImage = styled.img`
  width: 345px;
  border: 2px solid #8bbabb;
  border-radius: 5px;
`

function Summary(props) {
  const [experience] = React.useState(
    JSON.parse(localStorage.getItem("experiences")).filter(experience => {
      return experience.id === props.match.params.id
    })[0] || []
  )

  return (
    <>
      <StyledHeader>
        <StyledHeadline>{experience.title}</StyledHeadline>
      </StyledHeader>
      <StyledText>{experience.content}</StyledText>
      <StyledContainerImage>
        <StyledUploadedImage src={experience.image} alt="" />
      </StyledContainerImage>
    </>
  )
}

export default Summary
