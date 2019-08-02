import React from "react"
import styled from "styled-components"

import headerImg from "../images/diary.png"
import Button from "./Button"

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  opacity: 0.8;
`

const StyledInput = styled.input`
  border: 2px solid #bbded6;
  border-radius: 5px;
  font-family: "Cousine", monospace;
  font-size: 17px;
  width: 80%;
  height: 30px;
  outline: none;
  ::placeholder {
    font-size: 19px;
    color: #dedede;
    text-align: center;
  }
`

const StyledTextarea = styled.textarea`
  border: 2px solid #bbded6;
  border-radius: 5px;
  width: 80%;
  height: 300px;
  font-family: "Cousine", monospace;
  font-size: 17px;
  background-image: url(https://images.unsplash.com/photo-1554757387-fa0367573d09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80);
  background-size: cover;
  margin: 30px;
  opacity: 0.9;
  outline: none;
  ::placeholder {
    font-size: 19px;
    color: #dedede;
    text-align: center;
  }
`

const StyledForm = styled.form`
  text-align: center;
`

const StyledIconSave = styled.i`
  color: #414141;
  border-left: 2px solid #bbded6;
  padding: 5px 5px 5px 20px;
  margin-left: 15px;
`

function Form() {
  return (
    <>
      <StyledImg src={headerImg} alt="dream-image" />
      <StyledForm>
        <StyledInput type="text" placeholder="Datum und Ort" />
        <StyledTextarea placeholder="Was hast du dort erlebt?" />
        <Button>
          Text speichern
          <StyledIconSave className="fas fa-save fa-lg" />
        </Button>
      </StyledForm>
    </>
  )
}

export default Form
