import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledButton = styled.button`
  font-family: "Cousine", monospace;
  border-radius: 2px;
  width: 80%;
  height: auto;
  color: #414141;
  font-size: 16px;
  background-color: white;
  border: 2px solid #e28273;
  text-decoration: none;
  padding: 10px 15px;
  outline: none;
  box-shadow: 0 5px 10px -5px #00000070;
  margin-bottom: 30px;
`

function Button(props) {
  return <StyledButton {...props} />
}

Button.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string
}

export default Button
