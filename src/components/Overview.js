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

const StyledContent = styled.div`
  font-size: 1em;
  padding: 10px;
`

function Overview() {
  return (
    <>
      <StyledImg src={headerImg} alt="travel-diary image" />
      <StyledContent>Übersicht meiner Länder</StyledContent>
    </>
  )
}

export default Overview
