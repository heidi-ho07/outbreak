import React from "react"
import styled from "styled-components"

import Header from "../components/Header"
import headerImg from "../images/Reisetagebuch.png"

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`

const StyledContent = styled.p`
  font-size: 1em;
  padding: 10px;
  display: inline;
`

const StyledIcon = styled.i`
  color: #414141;
`

const StyledHeader = styled.div`
  text-align: center;
`

function Overview() {
  return (
    <>
      <StyledImg src={headerImg} alt="travel-diary image" />
      <StyledHeader>
        <StyledContent>Übersicht meiner Länder</StyledContent>
        <StyledIcon className="fas fa-folder-plus fa-lg" />
      </StyledHeader>
    </>
  )
}

export default Overview
