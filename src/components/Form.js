import styled from "styled-components"
import React, { useState } from "react"
import uuidv1 from "uuid/v1"
import axios from "axios"

import Header from "./Header"
import headerImg from "../images/diary.png"
import Button from "./Button"

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px -5px #00000070;
`

const StyledInput = styled.input`
  border: 2px solid #8bbabb;
  border-radius: 5px;
  font-family: "Cousine", monospace;
  font-size: 17px;
  width: 80%;
  height: 30px;
  outline: none;
  color: #414141;
  box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.25);
  ::placeholder {
    font-size: 19px;
    color: #dedede;
    text-align: center;
  }
`

const StyledTextarea = styled.textarea`
  border: 2px solid #8bbabb;
  border-radius: 5px;
  width: 80%;
  height: 300px;
  font-family: "Cousine", monospace;
  font-size: 17px;
  background-color: none;
  color: #414141;
  margin: 20px;
  outline: none;
  box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.25);
  padding: 20px;
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
  border-left: 2px solid white;
  padding: 5px 5px 5px 20px;
  margin-left: 15px;
`

const StyledDatePicker = styled.input`
  font-family: "Cousine", monospace;
  outline: none;
  font-size: 17px;
  border: 2px solid #8bbabb;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 80%;
  color: #dedede;
  text-align: center;
  box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.25);
`

const StyledUploadIcon = styled.i`
  color: #8bbabb;
  box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.25);
  margin-left: 7px;
`

const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

function Form({ history, match }) {
  const [experiences, setExperiences] = React.useState(
    JSON.parse(localStorage.getItem("experiences")) || []
  )

  const experience = experiences.find(experience => {
    return experience.id === match.params.id
  })

  const [title, setTitle] = useState((experience && experience.title) || "")
  const [content, setContent] = useState(
    (experience && experience.content) || ""
  )
  const [date, setDate] = useState((experience && experience.date) || "")
  const [image, setImage] = useState((experience && experience.image) || "")

  React.useEffect(() => {
    localStorage.setItem("experiences", JSON.stringify(experiences))
  }, [experiences])

  async function addNewExperience(event) {
    event.preventDefault()

    if (experience) {
      const index = experiences.findIndex(item => item.id === experience.id)
      await setExperiences([
        ...experiences.slice(0, index),
        {
          ...experience,
          title,
          content,
          date,
          image
        },
        ...experiences.slice(index + 1)
      ])
    } else {
      const newExperience = { title, content, date, image, id: uuidv1() }
      await setExperiences([...experiences, newExperience])
      console.log(newExperience)
    }

    setTitle("")
    setContent("")

    history.push("/country/Thailand") // Todo: go last country
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

  const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
  const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`

    const formData = new FormData()

    formData.append("file", event.target.files[0])
    formData.append("upload_preset", PRESET)

    axios
      .post(url, formData, {
        headers: {
          "Content-type": "multipart/form-data"
        }
      })
      .then(onImageSave)
      .catch(err => console.error(err))
  }

  function onImageSave(response) {
    alert("Foto wird geladen")
    setImage(response.data.url)
  }

  return (
    <>
      <Header />
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
        <StyledBtnContainer>
          <Button>
            Text speichern
            <StyledIconSave className="fas fa-save fa-lg" />
          </Button>

          <input
            onChange={upload}
            style={{ display: "none" }}
            id="raised-button-file"
            type="file"
          />
          <label htmlFor="raised-button-file">
            <StyledUploadIcon className="far fa-image fa-3x" />
          </label>
        </StyledBtnContainer>
      </StyledForm>
      <img src={image} alt="" style={{ width: "100%" }} />
    </>
  )
}

export default Form
