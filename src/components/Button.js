import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const StyledButton = styled.button`
  font-family: "Cousine", monospace;
  border-radius: 10px;
  color: #414141;
  font-size: 15px;
  border: solid #bbded6 2px;
  text-decoration: none;
  background-color: transparent;
  padding: 10px 15px;
`

const StyledIconPen = styled.i`
  color: #414141;
  border-left: 2px solid #bbded6;
  padding: 5px 5px 5px 20px;
  margin-left: 15px;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

function Button({ icon, onClick, ...props }) {
  return (
    <StyledContainer>
      <Link to="/overview">
        <StyledButton onClick={onClick} {...props}>
          Reisetagebuch erstellen
          <StyledIconPen className="fas fa-pencil-alt fa-lg" />
        </StyledButton>
      </Link>
    </StyledContainer>
  )
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
