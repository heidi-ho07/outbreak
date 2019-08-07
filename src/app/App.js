import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import GlobalStyles from "../app/Globalstyles"
import Header from "../components/Header"
import Landingpage from "../components/Landingpage"
import Overview from "../components/Overview"
import Country from "../components/Country"
import Form from "../components/Form"
import Summary from "../components/Summary"
import Footer from "../components/Footer"

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/overview" component={Overview} />
          <Route exact path="/country/:name" component={Country} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/summary/:title" component={Summary} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
