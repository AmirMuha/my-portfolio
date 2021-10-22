import { useMutation } from "@apollo/client"
import { navigate } from "gatsby"
import React, { FC, Reducer, useReducer, useState } from "react"
import { RouteComponentProps } from "@reach/router"
import { Eye } from "../../../icons/iconsJSX"
import { LoginMutation, SubmitAdminMutation } from "../../../util/mutations"
import Input from "../../UI/Input"

enum Credentials {
  "EMAIL_SUB",
  "PASS_SUB",
  "EMAIL_LOGIN",
  "PASS_LOGIN",
  "LINKEDIN",
  "INSTA",
  "GITHUB",
  "WHATSAPP",
  "HEROIMAGE",
  "FNAME",
  "LNAME",
  "RESUMES",
}
interface CredentialsState {
  fname: string
  lname: string
  email_login: string
  password_login: string
  email_submit: string
  password_submit: string
  instagram: string
  github: string
  whatsapp: string
  linkedIn: string
  heroImage: string
  resumes: string[]
}
interface CredentialsAction {
  type: Credentials
  value: string | string[]
}
const credentialsState: CredentialsState = {
  fname: "",
  lname: "",
  email_login: "",
  password_login: "",
  email_submit: "",
  password_submit: "",
  instagram: "",
  github: "",
  whatsapp: "",
  linkedIn: "",
  heroImage: "",
  resumes: [],
}

const credentialsReducer: Reducer<CredentialsState, CredentialsAction> = (
  state,
  action
) => {
  switch (action.type) {
    case Credentials.EMAIL_LOGIN:
      return { ...state }
    case Credentials.PASS_LOGIN:
      return { ...state }
    case Credentials.EMAIL_SUB:
      return { ...state }
    case Credentials.PASS_SUB:
      return { ...state }
    case Credentials.FNAME:
      return { ...state }
    case Credentials.LNAME:
      return { ...state }
    case Credentials.LINKEDIN:
      return { ...state }
    case Credentials.INSTA:
      return { ...state }
    case Credentials.WHATSAPP:
      return { ...state }
    case Credentials.GITHUB:
      return { ...state }
    case Credentials.HEROIMAGE:
      return { ...state }
    case Credentials.RESUMES:
      return { ...state }

    default:
      return state
  }
}

interface Props extends RouteComponentProps {}
const Auth: FC<Partial<Props>> = ({ children }) => {
  const [loginMutate] = useMutation(LoginMutation)
  const [submitMutate] = useMutation(SubmitAdminMutation)
  const [cState, dispatch] = useReducer(credentialsReducer, credentialsState)
  const [canSeePassword, setCanSeePassword] = useState<boolean>(false)
  const [canSeePassword_submit, setCanSeePassword_submit] =
    useState<boolean>(false)
  const submitLoginForm = (e: React.FormEvent) => {
    e.preventDefault()
    if (cState.email_login || cState.password_login) {
      loginMutate({
        variables: {
          email: cState.email_login,
          password: cState.password_login,
        },
      })
        .then(res => {
          navigate("/dashboard/")
        })
        .catch(e => {
          console.log(e)
        })
    } else {
      console.log(cState.email_login, cState.password_login)
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
    <main className="fixed inset-0 bg-palatte-400 overflow-y-scroll">
      <div
        style={{ width: "100vw", maxWidth: "700px", height: "fit-content" }}
        className="mx-auto"
      >
        <div className="mx-4 my-10">
          <div className="bg-palatte-100 p-5 border border-palatte-500 ">
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
                  label="Email"
                  type="email"
                  value={cState.email_login}
                  getValue={v =>
                    dispatch({ value: v, type: Credentials.EMAIL_LOGIN })
                  }
                  color="200"
                  required
                />
              </div>
              <div className="relative sm:col-span-3">
                <Input
                  id="password:login"
                  textColor="500"
                  className="w-full"
                  label="Password"
                  style={{ paddingRight: 20 }}
                  name="password:login"
                  value={cState.password_login}
                  getValue={v =>
                    dispatch({ value: v, type: Credentials.PASS_LOGIN })
                  }
                  color="200"
                  required
                  placeholder="Enter Your Password"
                  type={canSeePassword ? "text" : "password"}
                />
                <span
                  onClick={() => setCanSeePassword(prev => !prev)}
                  title="Show Password"
                  className="cursor-pointer p-2 absolute right-0 icon-palatte-400 bottom-1 transform"
                >
                  {Eye}
                </span>
              </div>
              <button
                type="submit"
                className="py-2 px-3 sm:col-span-1 self-end text-palatte-100 border border-palatte-100 hover:bg-palatte-400 bg-palatte-300"
                style={{ height: "fit-content" }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="mt-2 mx-4 mb-10">
          <div className="bg-palatte-100 p-6 border border-palatte-500">
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
              <div>
                <Input
                  placeholder="First Name"
                  id="firstname:submit"
                  textColor="500"
                  name="firstname:submit"
                  label="First Name"
                  value={cState.fname}
                  getValue={v =>
                    dispatch({ type: Credentials.FNAME, value: v })
                  }
                  color="200"
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="Last Name"
                  id="lastname:submit"
                  label="Last Name"
                  textColor="500"
                  name="lastname:submit"
                  value={cState.lname}
                  getValue={v =>
                    dispatch({ type: Credentials.LNAME, value: v })
                  }
                  color="200"
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="Email"
                  id="email:submit"
                  textColor="500"
                  label="Email"
                  name="email:submit"
                  value={cState.email_submit}
                  type="email"
                  getValue={v =>
                    dispatch({ type: Credentials.EMAIL_SUB, value: v })
                  }
                  color="200"
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="LinkedIn Profile URL"
                  id="linkedIn:submit"
                  label="LinkedIn URL"
                  textColor="500"
                  name="linkedIn:submit"
                  value={cState.linkedIn}
                  type="url"
                  getValue={v =>
                    dispatch({ type: Credentials.LINKEDIN, value: v })
                  }
                  color="200"
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="GitHub Profile URL"
                  id="github:submit"
                  textColor="500"
                  label="GitHubUrl"
                  name="github:submit"
                  value={cState.github}
                  getValue={v =>
                    dispatch({ type: Credentials.GITHUB, value: v })
                  }
                  color="200"
                  type="url"
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="WhatsApp Profile Number"
                  label="WhatsApp Phone Number"
                  id="whatsapp:submit"
                  textColor="500"
                  name="whatsapp:submit"
                  value={cState.whatsapp}
                  getValue={v =>
                    dispatch({ type: Credentials.WHATSAPP, value: v })
                  }
                  color="200"
                  type="tel"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <Input
                  placeholder="Instagram Profile URL"
                  id="instagram:submit"
                  label="Instagram URL"
                  textColor="500"
                  name="instagram:submit"
                  value={cState.instagram}
                  getValue={v =>
                    dispatch({ type: Credentials.INSTA, value: v })
                  }
                  color="200"
                  type="url"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <Input
                  placeholder="Choose Hero Image"
                  buttonTitle="Choose"
                  id="heroimage:submit"
                  textColor="500"
                  type="file"
                  name="heroimage:submit"
                  value=""
                  label="Hero Image"
                  getValue={v =>
                    dispatch({ type: Credentials.HEROIMAGE, value: v })
                  }
                  color="200"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <Input
                  placeholder="Choose Resumes"
                  id="resumes:submit"
                  textColor="500"
                  buttonTitle="Choose"
                  type="file"
                  label="Resumes"
                  multiple
                  pattern="image/*"
                  name="resumes:submit"
                  value=""
                  getValue={(v, f) => {
                    dispatch({ type: Credentials.RESUMES, value: v })
                  }}
                  color="200"
                  required
                />
              </div>
              <div className="relative sm:col-span-2">
                <Input
                  id="password:submit"
                  textColor="500"
                  label="Password"
                  className="w-full"
                  name="password:submit"
                  value={cState.password_submit}
                  style={{ paddingRight: 20 }}
                  getValue={v =>
                    dispatch({ value: v, type: Credentials.PASS_SUB })
                  }
                  color="200"
                  required
                  placeholder="Password"
                  type={canSeePassword_submit ? "text" : "password"}
                />
                <span
                  onClick={() => setCanSeePassword_submit(prev => !prev)}
                  title="Show Password"
                  className="cursor-pointer  p-2 absolute right-0 icon-palatte-400 bottom-1.5 transform"
                >
                  {Eye}
                </span>
              </div>
              <button
                type="submit"
                className="py-2 sm:col-span-2 px-3 text-palatte-100 border border-palatte-100 hover:bg-palatte-400 bg-palatte-300"
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
// email
// password
// fname
// lname
// linkedIn
// whatsapp
// instagram
// github
// heroImage
// resumes
export default Auth
