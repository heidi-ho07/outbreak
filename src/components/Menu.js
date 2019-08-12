import React from "react"
import styled, { keyframes } from "styled-components"

import { spinRotation } from "../utils/animation.js"

const StyledMenu = styled.div`
  color: #414141;
  margin-left: 15px;
  position: absolute;
  top: 60px;
  animation: ${spinRotation} 4s infinite linear;
`

function Menu() {
  function handleClickMenu() {
    console.log("clicked menu")
  }
  return (
    <StyledMenu
      onClick={handleClickMenu}
      className="fas fa-paper-plane fa-lg"
      src={StyledMenu}
    />
  )
}

export default Menu
