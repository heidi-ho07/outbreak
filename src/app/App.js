import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import GlobalStyles from "../app/Globalstyles"
import Header from "../components/Header"
import Landingpage from "../components/Landingpage"
import Overview from "../components/Overview"

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Router>
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/overview" component={Overview} />
      </Router>
    </>
  )
}

export default App
