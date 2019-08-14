import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import Header from "./Header"
import headerImg from "../images/overview.png"
import Globalstyle from "../app/Globalstyles"
import Button from "./Button"

import moment from "moment"

const StyledHeader = styled.div`
  background-image: url(${headerImg});
  background-size: 100%;
  height: 142px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  box-shadow: 0 5px 15px -5px #00000070;
`

const StyledCountry = styled.h1`
  color: white;
  font-family: "Dancing Script", cursive;
  font-weight: 700;
  font-size: 60px;
`

const StyledOverview = styled.div`
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
`

const StyledLink = styled(Link)`
  line-height: 1.8;
  list-style-type: none;
  display: inline-block;
  text-decoration: none;
  color: #414141;
`

const StyledPlane = styled.i`
  color: #414141;
  padding-right: 30px;
  padding-left: 20px;
`
const StyledIconPen = styled.i`
  color: white;
  border-left: 2px solid #bbded6;
  padding: 5px 5px 5px 20px;
  margin-left: 15px;
`

const StyledDeleteBtn = styled.i`
  color: #414141;
  padding-left: 20px;
`

const StyledContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
`

function Country(props) {
  const [experiences, setExperiences] = React.useState(
    JSON.parse(localStorage.getItem("experiences")) || []
  )

  React.useEffect(() => {
    localStorage.setItem("experiences", JSON.stringify(experiences))
  }, [experiences])

  function handleDelete(index) {
    let sign = prompt("Wirklich löschen?")

    if (sign.toLowerCase() === "ja") {
      setTimeout(function() {
        setExperiences([
          ...experiences.slice(0, index),
          ...experiences.slice(index + 1)
        ])
      }, 500)
    }
  }

  return (
    <>
      <Globalstyle />
      <Header />
      <StyledHeader>
        <StyledCountry>{props.match.params.name}</StyledCountry>
      </StyledHeader>
      <StyledContainer>
        <Link to="/form">
          <Button>
            Neuer Beitrag
            <StyledIconPen className="far fa-edit fa-lg" />
          </Button>
        </Link>
      </StyledContainer>
      <StyledOverview>Beiträge ({experiences.length})</StyledOverview>
      {/* <ul> */}
        {experiences.map((experience, index) => {
          return (
            <div key={experience.id} style={{display: 'flex', alignItems: "center"}}>
              <StyledLink to={`/summary/${experience.id}`}>
                <StyledPlane className="fab fa-telegram-plane" />

                <span>{moment(experience.date).format("ll")}</span>
                <span> - </span>

                <span>{experience.title}</span>
              </StyledLink>

              <StyledDeleteBtn
                onClick={() => handleDelete(index)}
                className="fas fa-minus-circle shake"
              />
            </div>
          )
        })}
      {/* </ul> */}
    </>
  )
}

export default Country
