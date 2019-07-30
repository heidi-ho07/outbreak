import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import GlobalStyles from "../app/Globalstyles"
import Header from "../components/Header"
import Landingpage from "../components/Landingpage"
import Overview from "../components/Overview"

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/overview" component={Overview} />
        </Switch>
      </Router>
    </>
  )
}

export default App
