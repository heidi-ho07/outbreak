import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledButton = styled.button`
  font-family: "Cousine", monospace;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  background-color: #8bbabb;
  border: none;
  text-decoration: none;
  padding: 10px 15px;
  outline: none;
  box-shadow: 0 5px 15px -5px #00000070;
  /* margin-bottom: 15px; */
`

function Button(props) {
  return <StyledButton>{props.children}</StyledButton>
}

Button.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string
}

export default Button
