import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

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

function Button(props) {
  return <StyledButton>{props.children}</StyledButton>
}

Button.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string
}

export default Button
