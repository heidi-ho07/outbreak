import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import GlobalStyles from "../app/Globalstyles"
import Header from "../components/Header"
import Landingpage from "../components/Landingpage"

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Router>
        <Route path="/" component={Landingpage} />
      </Router>
    </>
  )
}

export default App
