import React from "react"
import styled from "styled-components"

import headerImg from "../images/Reisetagebuch.png"

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`

const StyledContent = styled.p`
  font-size: 1em;
  padding: 10px;
  display: inline;
`

const StyledFolderIcon = styled.i`
  color: #414141;
  padding: 10px;
`

const StyledTrashIcon = styled.i`
  color: #414141;
`

const StyledSearchBtn = styled.button`
  border: none;
  background: none;
  margin-left: 20px;
  color: #414141;
`

const StyledContainer = styled.div`
  text-align: center;
`

const StyledInput = styled.input`
  border: none;
  flex: 1;
  font-family: "Cousine", monospace;
`

const StyledCountry = styled.p`
  margin-right: 10px;
  color: #414141;
`

const StyledCountryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  margin: 10px;
`

const StyledInputContainer = styled.div`
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  margin: 0 65px;
`

const StyledHeadline = styled.div`
  margin-bottom: 20px;
`

function Overview() {
  const [countries, setCountries] = React.useState([
    "Australien",
    "Thailand",
    "Taka-Tuka-Land"
  ])

  const [newCountry, setNewCountry] = React.useState("")

  function handleChange(event) {
    setNewCountry(event.target.value)
  }

  function addNewCountry(event) {
    event.preventDefault()
    setCountries([...countries, newCountry])
    setNewCountry("")
  }

  function handleDelete(index) {
    // countries.splice(index, 1)
    // setCountries([...countries])
    setCountries([...countries.slice(0, index), ...countries.slice(index + 1)])
  }

  return (
    <StyledContainer>
      <StyledImg src={headerImg} alt="travel-diary image" />
      <StyledHeadline>
        <StyledContent>Übersicht meiner Länder</StyledContent>
      </StyledHeadline>
      <form onSubmit={addNewCountry}>
        <StyledInputContainer>
          <StyledInput
            value={newCountry}
            onChange={handleChange}
            type="search"
            placeholder="Land hinzufügen"
          />
          <StyledSearchBtn type="submit">
            <StyledFolderIcon className="fas fa-folder-plus fa-2x" />
          </StyledSearchBtn>
        </StyledInputContainer>
      </form>
      {countries.map((country, index) => {
        return (
          <StyledCountryContainer>
            <StyledCountry>{country}</StyledCountry>
            <StyledTrashIcon
              onClick={() => handleDelete(index)}
              className="fas fa-trash-alt fa-s"
            />
          </StyledCountryContainer>
        )
      })}
    </StyledContainer>
  )
}

export default Overview
