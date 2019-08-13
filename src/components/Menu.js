import React from "react"
import styled from "styled-components"

import { spinRotation } from "../utils/animation.js"

const StyledMenuBtn = styled.div`
  color: #414141;
  margin-left: 15px;
  position: absolute;
  top: 60px;
  /* animation: ${spinRotation} 4s infinite linear; */
`

const StyledMenuCard = styled.div`
  border: 2px solid gray;
`

const StyledShowMenu = styled.div`
  display: block;
`

function Menu() {
  const [clickedMenu, setClickedMenu] = React.useState(false)
  function toggleMenu() {
    clickedMenu ? setClickedMenu(false) : setClickedMenu(true)
  }
  return (
    <>
      <StyledMenuBtn
        onClick={toggleMenu}
        className="fas fa-paper-plane fa-lg"
      />
      <StyledMenuCard>
        {clickedMenu ? (
          <StyledShowMenu>
            <i className="fas fa-home" />
            Home
            <i className="fas fa-globe" />
            Übersicht meiner Länder
          </StyledShowMenu>
        ) : null}
      </StyledMenuCard>
    </>
  )
}

export default Menu
