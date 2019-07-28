import React from "react"
import styled from "styled-components"

import Header from "../components/Header"
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

const StyledIcon = styled.i`
  color: #414141;
`

const StyledHeader = styled.div`
  text-align: center;
`

const StyledInput = styled.input`
  background: #fff;
  border-bottom: 2px solid #d7d1c9;
  border-radius: 2px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  margin-top: 10px;
`

function Overview() {
  const [countries, setCountries] = React.useState(["Australien", "Thailand"])

  return (
    <>
      <StyledImg src={headerImg} alt="travel-diary image" />
      <StyledHeader>
        <StyledContent>Übersicht meiner Länder</StyledContent>
        <StyledIcon className="fas fa-folder-plus fa-lg" />
        <br />
        <form>
          <StyledInput type="search" />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
        {countries.map(country => {
          return <p>{country}</p>
        })}
      </StyledHeader>
    </>
  )
}

export default Overview
