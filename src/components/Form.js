import React from "react"
import styled from "styled-components"

import headerImg from "../images/diary.png"
import Button from "./Button"

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  opacity: 0.7;
`

const StyledInput = styled.input`
  border: 2px solid #bbded6;
  border-radius: 5px;
  font-family: "Cousine", monospace;
  font-size: 17px;
  width: 80%;
  height: 30px;
  outline: none;
  opacity: 0.6;
  color: #414141;
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
  background-color: none;
  color: #414141;
  margin: 30px;
  outline: none;
  opacity: 0.6;
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
  color: white;
  border-left: 2px solid #bbded6;
  padding: 5px 5px 5px 20px;
  margin-left: 15px;
`

function Form() {
  const [title, setTitle] = React.useState("")
  const [content, setContent] = React.useState("")

  function addNewExperience(event) {
    event.preventDefault()
    setTitle("")
    setContent("")
    console.log("title", title)
    console.log("content", content)
  }

  function handleTitleChange(event) {
    setTitle(event.target.value)
  }

  function handleContentChange(event) {
    setContent(event.target.value)
  }

  return (
    <>
      <StyledImg src={headerImg} alt="dream-image" />
      <StyledForm onSubmit={addNewExperience}>
        <StyledInput
          onChange={handleTitleChange}
          type="text"
          placeholder="Datum und Ort"
          value={title}
          name="title"
        />
        <StyledTextarea
          onChange={handleContentChange}
          placeholder="Was hast du dort erlebt?"
          value={content}
          name="content"
        />
        <Button>
          Text speichern
          <StyledIconSave className="fas fa-save fa-lg" />
        </Button>
        <ul>
          <li>`shit dosen't work`</li>
          <li>
            {title}
            {content}
          </li>
        </ul>
      </StyledForm>
    </>
  )
}

export default Form
