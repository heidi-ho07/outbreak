import React from "react"
import styled from "styled-components"

import headerImg from "../images/diary.png"

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`

function Form() {
  return (
    <>
      <StyledImg src={headerImg} alt="dream-image" />
    </>
  )
}

export default Form
