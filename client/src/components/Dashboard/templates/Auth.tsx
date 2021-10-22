import { useMutation } from "@apollo/client"
import { navigate } from "gatsby"
import React, { FC, useState } from "react"
import { RouteComponentProps } from "@reach/router"
import { Eye } from "../../../icons/iconsJSX"
import { LoginMutation, SubmitAdminMutation } from "../../../util/mutations"
import Input from "../../UI/Input"

interface LoginTypes {
  emailLogin: string
  passwordLogin: string
}
interface SubmitTypes {
  emailSubmit: string
  passwordSubmit: string
}
interface Props extends RouteComponentProps {}
const Auth: FC<Partial<Props>> = ({ children }) => {
  const [loginMutate] = useMutation(LoginMutation)
  const [submitMutate] = useMutation(SubmitAdminMutation)
  const [emailLogin, setEmailLogin] = useState<string>("")
  const [passwordLogin, setPasswordLogin] = useState<string>("")
  const [canSeePassword, setCanSeePassword] = useState<boolean>(false)
  const [] = useState()
  const submitLoginForm = (e: React.FormEvent) => {
    e.preventDefault()
    if (emailLogin || passwordLogin) {
      loginMutate({
        variables: {
          email: emailLogin,
          password: passwordLogin,
        },
      })
        .then(res => {
          navigate("/dashboard/")
        })
        .catch(e => {
          console.log(e)
        })
    } else {
      console.log(emailLogin, passwordLogin)
    }
  }
  const submitNewAdmin = (e: React.FormEvent) => {
    e.preventDefault()
    // if () {
    //   // Error
    // } else {
    // }
  }
  return (
    <main className="fixed inset-0 bg-palatte-400">
      <div
        style={{ width: "100vw", maxWidth: "700px", height: "fit-content" }}
        className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
      >
        <div className="m-4">
          <div className="bg-palatte-100 p-2 border border-palatte-500 ">
            <p
              style={{ margin: "0 0 10px 0" }}
              className="text-sm.8 text-center font-bold mb-1"
            >
              Login
            </p>
            <form
              className="grid grid-cols-1 sm:grid-cols-7 gap-2"
              onSubmit={e => submitLoginForm(e)}
            >
              <div className="sm:col-span-3">
                <Input
                  placeholder="Enter Email"
                  id="email:login"
                  textColor="500"
                  name="email:login"
                  value={emailLogin}
                  getValue={v => setEmailLogin(v)}
                  color="200"
                  required
                />
              </div>
              <div className="relative sm:col-span-3 pr-8 bg-palatte-200">
                <Input
                  id="password:login"
                  textColor="500"
                  className="w-full"
                  name="password:login"
                  value={passwordLogin}
                  getValue={v => setPasswordLogin(v)}
                  color="200"
                  required
                  placeholder="Enter Your Password"
                  type={canSeePassword ? "text" : "password"}
                />
                <span
                  onClick={() => setCanSeePassword(prev => !prev)}
                  title="Show Password"
                  className="cursor-pointer  p-2 absolute right-0 icon-palatte-400 top-1/2 -translate-y-1/2 transform"
                >
                  {Eye}
                </span>
              </div>
              <button
                type="submit"
                className="py-1 px-3 sm:col-span-1 text-palatte-100 border border-palatte-100 hover:bg-palatte-400 bg-palatte-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="mt-2 mx-4 mb-4">
          <div className="bg-palatte-100 p-2 border border-palatte-500">
            <p
              style={{ margin: "0 0 10px 0" }}
              className="text-sm.8 text-center font-bold mb-1"
            >
              Submit
            </p>
            <form
              onSubmit={e => submitNewAdmin(e)}
              className="gap-2 grid grid-cols-1 sm:grid-cols-2"
            >
              <div></div>
              <button
                type="submit"
                className="py-2 px-3 text-palatte-100 border border-palatte-100 hover:bg-palatte-400 bg-palatte-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Auth
