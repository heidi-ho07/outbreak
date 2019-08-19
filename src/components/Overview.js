import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import headerImg from "../images/overview.png"
import logo from "../images/LogoOutbreak.png"
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

const StyledHeadline = styled.p`
  font-size: 24px;
  padding: 10px;
  margin-bottom: 20px;
`

const StyledTrashIcon = styled.i`
  color: #414141;
`

const StyledContainer = styled.div`
  text-align: center;
  padding: 18px;
`

const StyledInput = styled.input`
  font-family: "Cousine", monospace;
  border-radius: 2px;
  width: 100%;
  height: auto;
  color: #414141;
  font-size: 16px;
  background-color: white;
  border: 2px solid #e28273;
  text-decoration: none;
  padding: 15px;
  outline: none;
  box-shadow: 0 5px 10px -5px #00000070;
  margin-bottom: 20px;
  ::placeholder {
    font-size: 16px;
  }
`

const StyledLink = styled(Link)`
  margin-right: 10px;
  color: #414141;
  text-decoration: none;
`

const StyledCountryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  font-size: 20px;
  line-height: 10px;
`

function Overview() {
  const [countries, setCountries] = useState(
    JSON.parse(localStorage.getItem("country")) || []
  )

  React.useEffect(() => {
    localStorage.setItem("country", JSON.stringify(countries))
  }, [countries])

  const [newCountry, setNewCountry] = useState("")

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
    setTimeout(function() {
      setCountries([
        ...countries.slice(0, index),
        ...countries.slice(index + 1)
      ])
    }, 500)
  }

  return (
    <>
      <StyledImgLogo>
        <StyledImg src={headerImg} alt="travel-diary image" />
        <StyledLogo src={logo} />
      </StyledImgLogo>
      <StyledContainer>
        <StyledHeadline>Meine Länder</StyledHeadline>
        <form onSubmit={addNewCountry}>
          <StyledInput
            value={newCountry}
            onChange={handleChange}
            type="search"
            placeholder="Land hinzufügen"
          />
        </form>
        {countries.map((country, index) => {
          return (
            <StyledCountryContainer key={country}>
              <StyledLink to={`/country/${country}`}>{country}</StyledLink>
              <StyledTrashIcon
                onClick={() => handleDelete(index)}
                className="fas fa-trash-alt fa-s shake"
              />
            </StyledCountryContainer>
          )
        })}
      </StyledContainer>
      <Footer />
    </>
  )
}

export default Overview
