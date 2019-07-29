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
  margin-left: 50px;
`

const StyledTrahIcon = styled.i`
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
  background: #fff;
  border-bottom: 1px solid #d7d1c9;
  border-radius: 2px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  margin-top: 10px;
  margin-bottom: 60px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  margin: 5px;
`

const StyledHeadline = styled.div`
  margin-bottom: 20px;
`

function Overview() {
  const [countries, setCountries] = React.useState(["Australien", "Thailand"])
  const [newCountry, setNewCountry] = React.useState("")

  function handleChange(event) {
    setNewCountry(event.target.value)
  }

  function addNewCountry(event) {
    event.preventDefault()
    setCountries([...countries, newCountry])
    setNewCountry("")
  }

  return (
    <StyledContainer>
      <StyledImg src={headerImg} alt="travel-diary image" />
      <StyledHeadline>
        <StyledContent>Übersicht meiner Länder</StyledContent>
      </StyledHeadline>
      <StyledInputContainer>
        <form onSubmit={addNewCountry}>
          <StyledInput
            value={newCountry}
            onChange={handleChange}
            type="search"
          />
          <StyledSearchBtn type="submit">
            <StyledFolderIcon className="fas fa-folder-plus fa-2x" />
          </StyledSearchBtn>
        </form>
      </StyledInputContainer>
      {countries.map(country => {
        return (
          <StyledCountryContainer>
            <StyledCountry>{country}</StyledCountry>
            <StyledTrahIcon className="fas fa-trash-alt fa-s" />
          </StyledCountryContainer>
        )
      })}
    </StyledContainer>
  )
}

export default Overview
