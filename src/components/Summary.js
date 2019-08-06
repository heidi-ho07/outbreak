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
  padding: 20px;
`

const StyledHeadline = styled.h1`
  color: gray;
`

function Summary(props) {
  return (
    <>
      <StyledHeadline>{props.match.params.title}</StyledHeadline>
      <StyledImg src={headerImg} alt="summary image" />
      <h1>01. Sep. 2019 - Chang Mai</h1>
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
