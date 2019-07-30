import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledButton = styled.button`
  font-family: "Cousine", monospace;
  border-radius: 10px;
  color: #414141;
  font-size: 20px;
  padding: 10px 23px 10px 23px;
  border: solid #bbded6 2px;
  text-decoration: none;
  background-color: none;
`

function Button({ icon, onClick, ...props }) {
  return (
    <>
      <StyledButton onClick={onClick} {...props} />
      <i className={`fas ${icon}`} />
    </>
  )
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
