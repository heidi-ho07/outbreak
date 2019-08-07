import React from "react"
import styled from "styled-components"

import headerImg from "../images/summary.png"

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`
const StyledText = styled.div`
  border: 2px solid #bbded6;
  border-radius: 5px;
  padding: 20px;
  margin: 15px;
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
`

function Summary(props) {
  return (
    <>
      <StyledHeader>
        <StyledHeadline>{props.match.params.title}</StyledHeadline>
        {/* <StyledImg src={headerImg} alt="summary image" /> */}
      </StyledHeader>
      <StyledText>
        Traveler traveler blogger, expedition expedition modern Travel cute
        wanderlust website. Cute modern organized, travelblogger modern
        WordPress traveler fun cute excursion. Theme whimsical clean adventure
        traveling traveler website modern fun. Design travelblogger blogger
        colorful, traveler pretty blogger expedition website website. Whimsical
        excursion modern fun adventure travelblogger Travel modern pretty.
      </StyledText>
    </>
  )
}

export default Summary
