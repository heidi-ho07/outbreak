import styled from "styled-components"
import { withRouter } from "react-router-dom"
import React, { useState } from "react"
import uuidv1 from "uuid/v1"
import axios from "axios"

import headerImg from "../images/form.png"
import logo from "../images/LogoOutbreak.png"
import Button from "./Button"
import Footer from "../components/Footer"

const StyledImgLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImg = styled.img`
  height: 70vh;
  width: 100vw;
  padding: 0;
  object-fit: cover;
  margin-bottom: 30px;
  box-shadow: 0 5px 15px -5px #00000070;
  z-index: 1;
  position: relative;
`

const StyledLogo = styled.img`
  width: 60%;
  z-index: 2;
  position: absolute;
  top: 30px;
  color: white;
`

const StyledInput = styled.input`
  border: 2px solid #e28273;
  border-radius: 2px;
  font-family: "Cousine", monospace;
  font-size: 17px;
  width: 80%;
  height: 30px;
  outline: none;
  color: #414141;
  text-align: center;
  padding: 21px 15px;
  margin-bottom: 20px;
  box-shadow: 0 5px 10px -5px #00000070;
  ::placeholder {
    font-size: 19px;
    color: #dedede;
    text-align: center;
  }
`

const StyledTextarea = styled.textarea`
  border: 2px solid #e28273;
  border-radius: 2px;
  width: 80%;
  height: 300px;
  font-family: "Cousine", monospace;
  font-size: 17px;
  background-color: none;
  color: #414141;
  outline: none;
  box-shadow: 0 5px 10px -5px #00000070;
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
  color: #414141;
  border-left: 2px solid #e28273;
  padding: 5px 5px 5px 20px;
  margin-left: 15px;
`

const StyledDatePicker = styled.input`
  font-family: "Cousine", monospace;
  outline: none;
  font-size: 18px;
  border: 2px solid #e28273;
  border-radius: 2px;
  margin-bottom: 10px;
  padding: 8px 15px;
  color: #dedede;
  text-align: center;
  box-shadow: 0 5px 10px -5px #00000070;
  width: 80%;
  height: auto;
`

const StyledUploadIcon = styled.i`
  color: #e28273;
  box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.25);
  margin-left: 7px;
`

const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding: 18px;
`

const StyledBackBtn = styled.i`
  color: white;
  z-index: 4;
  position: absolute;
  top: 20px;
  padding-left: 10px;
`

function Form({ history, match }) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [experiences, setExperiences] = React.useState(
    JSON.parse(localStorage.getItem("experiences")) || []
  )

  const experience = experiences.find(experience => {
    return experience.id === match.params.experienceId
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
      const newExperience = {
        title,
        content,
        date,
        image,
        id: uuidv1(),
        countryId: match.params.countryId
      }
      await setExperiences([...experiences, newExperience])
    }

    setTitle("")
    setContent("")

    history.push(`/country/${match.params.countryId}`) // Todo: go last country
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
    setIsLoading(true)
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
      .then(() => setIsLoading(false))
      .catch(err => console.error(err))
  }

  function onImageSave(response) {
    setImage(response.data.url)
  }

  function handleClickBack() {
    window.history.back()
  }

  return (
    <>
      <StyledImgLogo>
        <StyledImg src={headerImg} alt="dream-image" />
        <StyledLogo src={logo} alt="logo" />
      </StyledImgLogo>
      <StyledBackBtn
        onClick={handleClickBack}
        className="fas fa-angle-left fa-2x"
      />
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
            {isLoading ? (
              <i className="fas fa-spinner fa-spin fa-lg" />
            ) : (
              <>
                Text speichern
                <StyledIconSave className="fas fa-save fa-lg" />
              </>
            )}
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
      <Footer />
    </>
  )
}

export default withRouter(Form)
