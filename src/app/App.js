import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Redirect } from "react-router"

import GlobalStyles from "../app/Globalstyles"
import Header from "../components/Header"
import Landingpage from "../components/Landingpage"
import Overview from "../components/Overview"

function App() {
  return (
    <>
      <GlobalStyles />
      <a href="/">
        <Header />
      </a>
      <Router>
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/overview" component={Overview} />
      </Router>
    </>
  )
}

export default App
