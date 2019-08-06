import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledButton = styled.button`
  font-family: "Cousine", monospace;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  background-color: #bbded6;
  border: none;
  text-decoration: none;
  padding: 10px 15px;
  outline: none;
`

function Button(props) {
  return <StyledButton>{props.children}</StyledButton>
}

Button.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string
}

export default Button
