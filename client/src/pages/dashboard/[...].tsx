import React, { FC } from "react"

import AboutMe from "../../components/Dashboard/templates/AboutMe"
import Auth from "../../components/Dashboard/templates/Auth"
import Dashboard from "../../components/Dashboard/templates/Dashboard"
import Messages from "../../components/Dashboard/templates/Messages"
import { PageProps } from "gatsby"
import PrivateRoute from "../../components/PrivateRoute"
import { Router } from "@reach/router"

const DashboardHomePage: FC<PageProps> = ({ children, data, params }) => {
  return (
    <Router>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/dashboard/messages" component={Messages} />
      <PrivateRoute path="/dashboard/about-me" component={AboutMe} />
      <Auth path="/dashboard/auth" />
    </Router>
  )
}

export default DashboardHomePage
