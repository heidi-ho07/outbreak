import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import headerImg from "../images/overview.png"
import Globalstyle from "../app/Globalstyles"
import Button from "./Button"
import Form from "./Form"

const StyledHeader = styled.div`
  background-image: url(${headerImg});
  background-size: 100%;
  height: 142px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  filter: grayscale(80%);
`

const StyledCountry = styled.h1`
  color: white;
`

const StyledOverview = styled.div`
  text-align: center;
  font-size: 12px;
`

const StyledLi = styled.li`
  line-height: 1.8;
  list-style-type: none;
`

const StyledPlane = styled.i`
  color: #414141;
  padding-right: 40px;
`
const StyledIconPen = styled.i`
  color: white;
  border-left: 2px solid #bbded6;
  padding: 5px 5px 5px 20px;
  margin-left: 15px;
`

const StyledContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
`

function Country(props) {
  const [dates, setDates] = React.useState([
    "2019/07/01 - Bangkok",
    "2019/07/07 - Chiang Mai",
    "2019/07/15 - Koh Samui"
  ])

  return (
    <>
      <Globalstyle />
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
      <StyledOverview>Beiträge ({dates.length})</StyledOverview>
      <ul>
        {dates.map(date => {
          return (
            <StyledLi key={date}>
              <StyledPlane className="fab fa-telegram-plane" />

              <span>{date}</span>
            </StyledLi>
          )
        })}
      </ul>
    </>
  )
}

export default Country
