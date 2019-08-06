import styled from "styled-components"
import React, { useState } from "react"

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
  margin: 20px;
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

const StyledDatePicker = styled.input`
  /* background-color: #bbded6; */
  font-family: "Cousine", monospace;
  outline: none;
  font-size: 17px;
  border: 2px solid #bbded6;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 80%;
  color: #dedede;
  text-align: center;
`

function Form({ history }) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [date, setDate] = useState("")

  const [experiences, setExperiences] = React.useState(
    JSON.parse(localStorage.getItem("experiences")) || []
  )

  React.useEffect(() => {
    localStorage.setItem("experiences", JSON.stringify(experiences))
  }, [experiences])

  async function addNewExperience(event) {
    event.preventDefault()
    setTitle("")
    setContent("")
    const newExperience = { title, content, date }
    await setExperiences([...experiences, newExperience])
    history.push("/country/Thailand")
  }

  function handleTitleChange(event) {
    setTitle(event.target.value)
  }

  function handleContentChange(event) {
    setContent(event.target.value)
  }

  function handleDateChange(event) {
    setDate(event.target.value)
  }

  return (
    <>
      <StyledImg src={headerImg} alt="dream-image" />
      <StyledForm onSubmit={addNewExperience}>
        <StyledDatePicker
          onChange={handleDateChange}
          type="date"
          value={date}
        />
        <StyledInput
          onChange={handleTitleChange}
          type="text"
          placeholder="Ort"
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
      </StyledForm>
    </>
  )
}

export default Form
