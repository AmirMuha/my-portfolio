import { navigate } from "gatsby-link"
import React, { FC } from "react"
import { useAuth } from "../util/useAuth"
import { RouteComponentProps } from "@reach/router"
interface Props extends RouteComponentProps {
  component: any
}
const PrivateRoute: FC<Partial<Props>> = ({ component: Component, path }) => {
  const { error } = useAuth()
  if (error) {
    navigate("/dashboard/auth/")
    return null
  }
  return <Component path={path} />
}
export default PrivateRoute
