import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import { spinRotation } from "../utils/animation.js"

const StyledMenuBtn = styled.div`
  color: #414141;
  margin-left: 15px;
  top: 60px;
  animation: ${props => props.clickedMenu ? spinRotation : null} 2s 1;
`

const StyledMenuCard = styled.div`
  padding: 10px;
  color: white;
  font-size: 24px;
  
`

const StyledShowMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  background-color: rgba(0,0,0,0.5);
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`

const StyledIcon = styled.i`
  margin: 10px;
`


function Menu() {
  const [clickedMenu, setClickedMenu] = React.useState(false)

  function toggleMenu() {
    setClickedMenu(!clickedMenu) 
  }

  return (
    <>
      <StyledMenuBtn
        clickedMenu={clickedMenu}
        onClick={toggleMenu}
        className="fas fa-paper-plane fa-lg"
      />
      <StyledMenuCard>
        {clickedMenu ? (
          <StyledShowMenu>
          <StyledLink to="/home">
            <StyledIcon className="fas fa-home" />
            <span>Home</span>
            </StyledLink>
              <div>
              <StyledLink to="/overview">
                <StyledIcon className="fas fa-globe" />
                <span>Übersicht Länder</span>
                </StyledLink>
              </div>
            </StyledShowMenu>
          ) : null}
        </StyledMenuCard>
    </>
  )
}

export default Menu
