import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import headerImg from "../images/countryPage.png"
import Button from "./Button"
import logo from "../images/LogoOutbreak.png"
import Footer from "../components/Footer"

import moment from "moment"

const StyledContainer = styled.div`
  padding: 18px;
  text-align: center;
  margin-bottom: 30px;
`

const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0;
  justify-content: space-between;
  flex-direction: column;
  background-image: url(${headerImg});
  background-size: cover;
  margin-bottom: 50px;
  box-shadow: 0 5px 15px -5px #00000070;
  height: 70vh;
  width: 100vw;
  margin-bottom: 30px;
`

const StyledLogo = styled.img`
  width: auto;
  height: 225px;
`

const StyledCountry = styled.h1`
  color: #eae9e9;
  font-family: "Dancing Script", cursive;
  font-weight: 700;
  font-size: 60px;
`

const StyledOverview = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`

const StyledAddIcon = styled.i`
  color: #414141;
  padding: 10px;
  margin-left: 20px;
  border-left: 2px solid #e28273;
  padding-left: 20px;
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

const StyledCity = styled.span`
  font-size: 18px;
  margin-bottom: 40px;
`

const StyledDeleteBtn = styled.i`
  color: #414141;
  padding-left: 20px;
`

const StyledBackBtn = styled.i`
  color: white;
  z-index: 4;
  position: absolute;
  top: 20px;
  padding-left: 10px;
`

function Country(props) {
  const [experiences, setExperiences] = React.useState(
    JSON.parse(localStorage.getItem("experiences")) || []
  )

  React.useEffect(() => {
    localStorage.setItem("experiences", JSON.stringify(experiences))
  }, [experiences])

  function handleDelete(experienceId) {
    const index = experiences
      .map(experience => {
        return experience.id
      })
      .indexOf(experienceId)

    setTimeout(function() {
      setExperiences([
        ...experiences.slice(0, index),
        ...experiences.slice(index + 1)
      ])
    }, 500)
  }

  function handleClickBack() {
    window.history.back()
  }

  return (
    <>
      <StyledHeaderContainer>
        <StyledLogo src={logo} alt="logo" />
        <StyledCountry>
          {JSON.parse(localStorage.getItem("countries"))
            .filter(country => {
              return country.id === props.match.params.name
            })
            .map(country => {
              return country.name
            })}
        </StyledCountry>
      </StyledHeaderContainer>
      <StyledBackBtn
        onClick={handleClickBack}
        className="fas fa-angle-left fa-2x"
      />
      <StyledContainer>
        <StyledContainer>
          <Link to={`/country/${props.match.params.name}/new`}>
            <Button>
              Neuer Beitrag
              <StyledAddIcon className="fas fa-plus-circle fa-lg" />
            </Button>
          </Link>
        </StyledContainer>
        <StyledOverview>
          Beiträge (
          {
            experiences.filter(experience => {
              return experience.countryId === props.match.params.name
            }).length
          }
          )
        </StyledOverview>
      </StyledContainer>
      {experiences
        .filter(experience => {
          return experience.countryId === props.match.params.name
        })
        .map((experience, index) => {
          return (
            <div
              key={experience.id}
              style={{ display: "flex", alignItems: "center" }}
            >
              <StyledLink to={`/summary/${experience.id}`}>
                <StyledPlane className="fab fa-telegram-plane" />
                <StyledCity>
                  <span>{moment(experience.date).format("ll")}</span>
                  <span> - </span>
                  <span>{experience.title}</span>
                </StyledCity>
              </StyledLink>

              <StyledDeleteBtn
                onClick={() => handleDelete(experience.id)}
                className="fas fa-trash-alt fa-s shake"
              />
            </div>
          )
        })}
      <Footer />
    </>
  )
}

export default Country
