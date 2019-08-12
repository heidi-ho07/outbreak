import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom"

import GlobalStyles from "../app/Globalstyles"
import Header from "../components/Header"
import Landingpage from "../components/Landingpage"
import Home from "../components/Home"
import Overview from "../components/Overview"
import Country from "../components/Country"
import Form from "../components/Form"
import Summary from "../components/Summary"
import Menu from "../components/Menu"
// import Footer from "../components/Footer"

function App(props) {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/overview" component={Overview} />
          <Route exact path="/country/:name" component={Country} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/summary/:id" component={Summary} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default withRouter(App)
