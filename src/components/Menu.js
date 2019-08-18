import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import { spinRotation } from "../utils/animation.js"

const StyledMenuBtn = styled.div`
  color: #eae9e9;
  margin: 0;
  padding-right: 5px;
  animation: ${props => (props.clickedMenu ? spinRotation : null)} 2s 1;
`

const StyledBorder = styled.div`
  border: 2px solid #8bbabb;
  border-radius: 15%;
  width: 50px;
  height: 50px;
  background-color: #8bbabb;
  box-shadow: 0 5px 10px -5px #00000070;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  margin-top: 15px;
`

const StyledMenuCard = styled.div`
  color: white;
  font-size: 24px;
  padding: 0;
`

const StyledShowMenu = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  height: 18%;
  width: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
  padding-top: 10px;
  border-radius: 5px;
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
      <StyledBorder>
        <StyledMenuBtn
          clickedMenu={clickedMenu}
          onClick={toggleMenu}
          className="fas fa-paper-plane fa-lg"
        />
      </StyledBorder>
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
