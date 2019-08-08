import styled from "styled-components"
import React, { useState } from "react"
import uuidv1 from "uuid/v1"
import axios from "axios"

import headerImg from "../images/diary.png"
import Button from "./Button"

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  opacity: 0.7;
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
  opacity: 0.6;
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
  opacity: 0.6;
  box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.25);
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
  font-family: "Cousine", monospace;
  outline: none;
  font-size: 17px;
  border: 2px solid #8bbabb;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 80%;
  color: #dedede;
  opacity: 0.6;
  text-align: center;
  box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.25);
`

const StyledUploadIcon = styled.i`
  color: white;
  padding: 5px 5px 5px 20px;
  margin-left: 15px;
  border-left: 2px solid #bbded6;
`

function Form({ history }) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [date, setDate] = useState("")
  const [image, setImage] = useState("")

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
    const newExperience = { title, content, date, image, id: uuidv1() }
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
    setImage(response.data.url)
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

        {/* <div>
          {image ? (
            <img src={image} alt="" style={{ width: "100%" }} />
          ) : (
            <input type="file" name="file" onChange={upload} />
          )}
        </div> */}
        <input type="file" onChange={upload} />
        <StyledUploadIcon className="fas fa-camera fa-lg" />
        <img src={image} alt="" style={{ width: "100%" }} />
      </StyledForm>
    </>
  )
}

export default Form
