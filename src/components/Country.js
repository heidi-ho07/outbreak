import React, { useState } from "react"
import styled from "styled-components"

import headerImg from "../images/country.png"
import Globalstyle from "../app/Globalstyles"
import Button from "./Button"

const StyledHeader = styled.div`
  background-image: url(${headerImg});
  background-size: 100%;
  height: 142px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`

const StyledCountry = styled.h1`
  color: white;
`

const StyledContainer = styled.div`
  /* text-align: center; */
`

const StyledOverview = styled.div`
  text-align: center;
  font-size: 12px;
`

const StyledLi = styled.li`
  line-height: 1.8;
  list-style-type: none;
`

const StyledPlane = styled.i`
  color: #414141;
  padding-right: 40px;
`

function Country(props) {
  console.log(props.match.params.name)
  const dates = [
    "2019/07/01 - Bangkok",
    "2019/07/07 - Chiang Mai",
    "2019/07/15 - Koh Samui"
  ]
  return (
    <>
      <Globalstyle />
      <StyledHeader>
        <StyledCountry>{props.match.params.name}</StyledCountry>
      </StyledHeader>
      <StyledOverview>Beiträge ({dates.length})</StyledOverview>
      <StyledContainer>
        <ul>
          {dates.map(date => {
            return (
              <StyledLi>
                <StyledPlane className="fab fa-telegram-plane" />
                <span key="date">{date}</span>
              </StyledLi>
            )
          })}
        </ul>
        <Button />
      </StyledContainer>
    </>
  )
}

export default Country
