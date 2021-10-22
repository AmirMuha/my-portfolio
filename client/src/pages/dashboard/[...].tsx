import React, { FC } from "react"
import { PageProps } from "gatsby"
import { Router } from "@reach/router"
import Messages from "../../components/Dashboard/templates/Messages"
import PrivateRoute from "../../components/PrivateRoute"
import AboutMe from "../about-me"
import Dashboard from "../../components/Dashboard/templates/Dashboard"
import Auth from "../../components/Dashboard/templates/Auth"
const DashboardHomePage: FC<PageProps> = ({ children, data, params }) => {
  return (
    <Router>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/dashboard/messages" component={Messages} />
      <PrivateRoute path="/dashboard" component={AboutMe} />
      <Auth path="/dashboard/auth" />
    </Router>
  )
}

export default DashboardHomePage
