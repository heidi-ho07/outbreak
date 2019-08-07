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
    </>
  )
}

export default Summary
