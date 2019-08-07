import React from "react"
import styled from "styled-components"

import headerImg from "../images/summary.png"

const StyledText = styled.div`
  border: 2px solid #bbded6;
  border-radius: 5px;
  padding: 20px;
  margin: 15px;
  box-shadow: 0 5px 15px -5px #00000070;
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

function Summary(props) {
  return (
    <>
      <StyledHeader>
        <StyledHeadline>{props.match.params.title}</StyledHeadline>
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
