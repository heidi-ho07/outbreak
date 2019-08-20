import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom"

import GlobalStyles from "../app/Globalstyles"
import Landingpage from "../components/Landingpage"
import Home from "../components/Home"
import Overview from "../components/Overview"
import Country from "../components/Country"
import Form from "../components/Form"
import Summary from "../components/Summary"

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
          <Route exact path="/country/:id/new" component={Form} />
          <Route exact path="/form/edit/:id" component={Form} />
          <Route exact path="/summary/:id" component={Summary} />
        </Switch>
      </Router>
    </>
  )
}

export default withRouter(App)
