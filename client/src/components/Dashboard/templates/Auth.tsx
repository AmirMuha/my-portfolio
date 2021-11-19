import { Eye, Reset } from "../../../icons/iconsJSX"
import React, {
  FC,
  Reducer,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react"
import {
  useConfirmEmailMutation,
  useIsThereAdminQueryQuery,
  useLoginMutation,
  useSubmitAdminMutation,
  useUploadFileMutation,
  useUploadFilesMutation,
} from "../../../types/graphql-types"

import Alert from "../../UI/Alert"
import Button from "../../../components/UI/Button"
import InBoxLoading from "../../UI/InBoxLoading"
import Input from "../../UI/Input"
import Modal from "../../../components/UI/Modal"
import { RouteComponentProps } from "@reach/router"
import { getErrorMessage } from "../../../util/getErrorMessage"
import { navigate } from "gatsby"
import { useAlert } from "../../../util/useAlert"
import { useAlertGraphqlError } from "../../../util/useAlertGraphqlError"
import { useAuth } from "../../../util/useAuth"

enum Credentials {
  "EMAIL_SUB",
  "PASS_SUB",
  "EMAIL_LOGIN",
  "PASS_LOGIN",
  "LINKEDIN",
  "INSTA",
  "GITHUB",
  "WHATSAPP",
  "SKYPE",
  "HEROIMAGE",
  "FNAME",
  "LNAME",
  "RESUMES",
}
interface CredentialsState {
  fname: string
  lname: string
  email: string
  password: string
  instagram: string
  github: string
  skype: string
  whatsapp: string
  linkedIn: string
  heroImage: string
  resumes: string
}

interface CredentialsAction {
  type: Credentials
  value: any
}
const credentialsState: CredentialsState = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  instagram: "",
  github: "",
  skype: "",
  whatsapp: "",
  linkedIn: "",
  heroImage: "",
  resumes: "",
}

const credentialsReducer: Reducer<CredentialsState, CredentialsAction> = (
  state,
  action
) => {
  switch (action.type) {
    case Credentials.EMAIL_SUB:
      return { ...state, email: action.value }
    case Credentials.PASS_SUB:
      return { ...state, password: action.value }
    case Credentials.FNAME:
      return { ...state, fname: action.value }
    case Credentials.LNAME:
      return { ...state, lname: action.value }
    case Credentials.LINKEDIN:
      return { ...state, linkedIn: action.value }
    case Credentials.INSTA:
      return { ...state, instagram: action.value }
    case Credentials.WHATSAPP:
      return { ...state, whatsapp: action.value }
    case Credentials.GITHUB:
      return { ...state, github: action.value }
    case Credentials.HEROIMAGE:
      return { ...state, heroImage: action.value }
    case Credentials.SKYPE:
      return { ...state, skype: action.value }
    case Credentials.RESUMES:
      return { ...state, resumes: action.value }
    default:
      return state
  }
}

enum ConfirmCodeTypes {
  ONE,
  TWO,
  THREE,
  FOUR,
  RESET,
}
interface ConfirmCodeState {
  confirmCode_1: string
  confirmCode_2: string
  confirmCode_3: string
  confirmCode_4: string
}
interface ConfirmCodeAction {
  type: ConfirmCodeTypes
  value: string
}

const confirmCodeInitialState: ConfirmCodeState = {
  confirmCode_1: "",
  confirmCode_2: "",
  confirmCode_3: "",
  confirmCode_4: "",
}

const confirmCodeReducer: Reducer<ConfirmCodeState, ConfirmCodeAction> = (
  state,
  action
) => {
  switch (action.type) {
    case ConfirmCodeTypes.RESET:
      return {
        confirmCode_1: "",
        confirmCode_2: "",
        confirmCode_3: "",
        confirmCode_4: "",
      }
    case ConfirmCodeTypes.ONE:
      return {
        ...state,
        confirmCode_1: action.value,
      }
    case ConfirmCodeTypes.TWO:
      return {
        ...state,
        confirmCode_2: action.value,
      }
    case ConfirmCodeTypes.THREE:
      return {
        ...state,
        confirmCode_3: action.value,
      }
    case ConfirmCodeTypes.FOUR:
      return {
        ...state,
        confirmCode_4: action.value,
      }
    default:
      return state
  }
}
interface Props extends RouteComponentProps {}

const Auth: FC<Partial<Props>> = () => {
  const [isEnterEmailCodeOpen, setIsEnterEmailCodeOpen] =
    useState<boolean>(false)
  const codeInputRef = useRef<HTMLDivElement>()
  const [
    { confirmCode_4, confirmCode_3, confirmCode_2, confirmCode_1 },
    dispatchConfirmCode,
  ] = useReducer(confirmCodeReducer, confirmCodeInitialState)
  const [isEmailConfirmBoxOpen, setIsEmailConfirmOpen] =
    useState<boolean>(false)
  const { data: loggedIn } = useAuth()
  const {
    isOpen: isErrorBoxOpen,
    setAlert,
    message: errorMessage,
    title: alertTitle,
  } = useAlert()
  const [
    confirmEmailMutate,
    { error: confirmEmailError, loading: confirmEmailLoading },
  ] = useConfirmEmailMutation()
  const [loginMutate, { error: loginError, loading: loginLoading }] =
    useLoginMutation()
  const [
    submitMutate,
    { error: submitAdminError, loading: submitAdminLoading },
  ] = useSubmitAdminMutation()
  const [mutateFile, { error: uploadFileError, loading: uploadFileLoading }] =
    useUploadFileMutation()
  const [
    mutateMultipleFile,
    { error: uploadFilesError, loading: uploadFilesLoading },
  ] = useUploadFilesMutation()
  const [loginCredentials, setLoginCredentials] = useState<{
    email: string
    password: string
  }>({ email: "", password: "" })
  const [files, setFiles] = useState<{
    heroImage?: File[]
    resumes?: File[]
  }>({})
  const [cState, dispatch] = useReducer(credentialsReducer, credentialsState)
  const [canSeePassword, setCanSeePassword] = useState<boolean>(false)
  const [isLoginLoading, setIsLoginLoading] = useState<boolean>(false)
  const [isSubmitLoading, setIsSubmitLoading] = useState<boolean>(false)
  const [canSeePassword_submit, setCanSeePassword_submit] =
    useState<boolean>(false)
  const [isThereAdminAlready, setThereIsAdmin] = useState<boolean>(false)
  const { data: foundAdmins } = useIsThereAdminQueryQuery()
  useAlertGraphqlError(uploadFileError, uploadFileLoading, setAlert)
  useAlertGraphqlError(uploadFilesError, uploadFilesLoading, setAlert)
  useAlertGraphqlError(loginError, loginLoading, setAlert)
  useAlertGraphqlError(submitAdminError, submitAdminLoading, setAlert)
  useAlertGraphqlError(confirmEmailError, confirmEmailLoading, setAlert)

  useEffect(() => {
    if (loggedIn) {
      navigate("/dashboard/")
    }
  }, [])
  useEffect(() => {
    if (foundAdmins?.isThereAnAdmin) {
      setThereIsAdmin(true)
    }
  },[])

  const getCodeNum = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: ConfirmCodeTypes
  ) => {
    if (e.currentTarget.value.match(/[0-9]/) || e.currentTarget.value === "") {
      dispatchConfirmCode({
        type,
        value: e.currentTarget.value,
      })
      if (e.currentTarget.value === "") {
        if (type !== ConfirmCodeTypes.ONE) {
          ;(e.currentTarget.previousSibling as HTMLInputElement).focus()
        }
      } else {
        if (type !== ConfirmCodeTypes.FOUR) {
          ;(e.currentTarget.nextSibling as HTMLInputElement).focus()
        }
      }
    }
  }

  const login = (sendCode?: boolean) => {
    if (loginCredentials.email || loginCredentials.password) {
      loginMutate({
        variables: {
          email: loginCredentials.email,
          password: loginCredentials.password,
        },
      })
        .then(res => {
          if (res?.data?.login?.token) {
            navigate("/dashboard/")
          } else if (isEmailConfirmBoxOpen && !res?.data?.login?.token) {
            setAlert({
              isOpen: true,
              title: "Error",
              message: "The code your entered either expired or isn't correct.",
            })
          }
          setIsLoginLoading(false)
        })
        .catch(e => {
          if(sendCode) {
            setAlert({
              isOpen: true,
              title: "Success",
              message: "Sent another code successfully."
            })
          } else {
            if (e.message.includes("confirmed")) {
              setAlert({
                isOpen: true,
                title: "Error",
                message: e.message,
              })
              setIsEmailConfirmOpen(true)
              setIsEnterEmailCodeOpen(true)
            } else {
              setAlert({
                isOpen: true,
                title: "Error",
                message:
                  e.message ||
                  "Couldn't login, please try again with the correct credentials.",
              })
            }
          }
          setIsLoginLoading(false)
        })
    } else {
      setIsLoginLoading(false)
    }
  }

  const sendCodeAgain = () => {
    login(true)
  }

  const sendConfirmCode = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault()
      if (confirmCode_1 && confirmCode_2 && confirmCode_3 && confirmCode_4) {
        confirmEmailMutate({
          variables: {
            code: +`${
              confirmCode_1 + confirmCode_2 + confirmCode_3 + confirmCode_4
            }`,
            email: cState.email ? cState.email : loginCredentials.email,
          },
        })
          .then(res => {
            if (res?.data?.confirmEmail) {
              setAlert({
                isOpen: true,
                title: "Success",
                message:
                  "Your email confirmed successfully. Now login to your account with your credentials.",
              })
              setIsEnterEmailCodeOpen(false)
              setIsEmailConfirmOpen(false)
              setThereIsAdmin(true)
            } else {
              setAlert({
                isOpen: true,
                title: "Error",
                message: "Confirm code was incurrect.",
              })
            }
          })
          .catch(codeError => {
            setAlert({
              isOpen: true,
              title: "Error",
              message:
                getErrorMessage(codeError) ||
                "Couldn't send the code, something went wrong.",
            })
          })
      } else {
        setAlert({
          isOpen: true,
          title: "Error",
          message: "Please enter a 4-digit number.",
        })
      }
    }
  }

  const submitLoginForm = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitLoading(true)
    login()
  }
  const submitNewAdmin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitLoading(true)
    const errors: any[] = []
    for (const o in cState) {
      if (!cState[o]) errors.push(o)
    }
    if (
      errors.length > 0 ||
      !files?.heroImage ||
      !files?.heroImage[0] ||
      !files?.resumes
    ) {
      setAlert({ isOpen: true, message: `${errors[0]} is required.` })
      setIsSubmitLoading(false)
    } else {
      mutateMultipleFile({
        variables: {
          files: files.resumes,
          isTemp: false,
        },
      })
        .then(multipleFilesUploadResponse => {
          mutateFile({
            variables: {
              file: files.heroImage ? files.heroImage[0] : null,
              isEdit: true,
            },
          })
            .then(singleFileUploadResponse => {
              if (
                singleFileUploadResponse?.data &&
                multipleFilesUploadResponse?.data?.uploadMultipleFiles
              ) {
                submitMutate({
                  variables: {
                    ...cState,
                    email: cState.email,
                    password: cState.password,
                    heroImage: singleFileUploadResponse.data.uploadSingleFile,
                    resumes:
                      multipleFilesUploadResponse.data.uploadMultipleFiles,
                  },
                })
                  .then(() => {
                    setAlert({
                      isOpen: true,
                      title: "Success",
                      message:
                        "Your submission was successful, a confirmation code was sent to your email please confirm your email.",
                    })
                    setIsSubmitLoading(false)
                    setIsEmailConfirmOpen(true)
                    setIsEnterEmailCodeOpen(true)
                  })
                  .catch(submitError => {
                    setAlert({
                      isOpen: true,
                      title: "Error",
                      message:
                        submitError.message ||
                        "Couldn't submit your information for some unknown reasons.",
                    })
                    setIsSubmitLoading(false)
                  })
              }
            })
            .catch(singleFileUploadError => {
              setAlert({
                isOpen: true,
                title: "Error",
                message: singleFileUploadError.errors
                  ? singleFileUploadError.errors[0].message
                  : singleFileUploadError.message ||
                    "Couldn't upload the hero image for unknown reason.",
              })
              setIsSubmitLoading(false)
            })
        })
        .catch(multipleFilesUploadError => {
          setAlert({
            isOpen: true,
            title: "Error",
            message:
              multipleFilesUploadError.message ||
              "Couldn't upload resumes for some unknown reasons.",
          })
          setIsSubmitLoading(false)
        })
    }
  }

return (
    <>
      {isEmailConfirmBoxOpen && (
        <Modal
          header
          onClose={() => {}}
          maxWidth="500px"
          style={{ margin: 0 }}
          title="Confirm Email"
        >
          <form onSubmit={e => sendConfirmCode(e)}>
            <div
              ref={codeInputRef as any}
              className="grid my-2 relative items-center num-input grid-cols-4 mx-auto text-sm.8 font-thin gap-4"
              style={{ width: "fit-content" }}
            >
              <input
                maxLength={1}
                id="digit-1"
                pattern="[0-9]"
                className="px-3 py-1 text-center bg-palatte-200 text-palatte-500"
                placeholder="-"
                type="text"
                style={{ width: 50 }}
                value={confirmCode_1}
                onChange={e => {
                  getCodeNum(e, ConfirmCodeTypes.ONE)
                }}
              />
              <input
                maxLength={1}
                pattern="[0-9]"
                id="digit-2"
                type="text"
                style={{ width: 50 }}
                className="px-3 py-1 text-center appearance-none bg-palatte-200 text-palatte-500"
                placeholder="-"
                onChange={e => {
                  getCodeNum(e, ConfirmCodeTypes.TWO)
                }}
                value={confirmCode_2}
              />
              <input
                maxLength={1}
                id="digit-3"
                type="text"
                pattern="[0-9]"
                style={{ width: 50 }}
                placeholder="-"
                onChange={e => {
                  getCodeNum(e, ConfirmCodeTypes.THREE)
                }}
                className="px-3 py-1 text-center appearance-none bg-palatte-200 text-palatte-500"
                value={confirmCode_3}
              />
              <input
                id="digit-4"
                type="text"
                maxLength={1}
                pattern="[0-9]"
                placeholder="-"
                onChange={e => {
                  getCodeNum(e, ConfirmCodeTypes.FOUR)
                }}
                className="px-3 py-1 text-center appearance-none bg-palatte-200 text-palatte-500"
                style={{ width: 50 }}
                value={confirmCode_4}
              />
              <button
                className="absolute -right-7"
                title="Reset input"
                type="button"
                onClick={() =>
                  dispatchConfirmCode({
                    type: ConfirmCodeTypes.RESET,
                    value: "",
                  })
                }
              >
                <span className="icon-s-4">{Reset}</span>
              </button>
            </div>
            <div className="flex justify-center mt-4 text-center gap-2">
              <Button
                normal
                outline
                color="100"
                textColor="500"
                borderColor="500"
                onClick={sendCodeAgain}
              >
                Resend Code
              </Button>
              <Button type="submit" normal outline>
                Send
              </Button>
            </div>
          </form>
        </Modal>
      )}
      {isErrorBoxOpen && (
        <Alert
          message={errorMessage}
          onClose={() => setAlert({ isOpen: false, message: "" })}
          header
          backdrop
          autoClose={5}
          title={alertTitle}
        />
      )}
      <main className="fixed inset-0 overflow-y-scroll bg-palatte-400">
        <div
          style={{ width: "100vw", maxWidth: "700px", height: "fit-content" }}
          className="mx-auto"
        >
          <div className="relative mx-4 my-10">
            {isLoginLoading && <InBoxLoading text={false} />}
            {isThereAdminAlready && !isEmailConfirmBoxOpen && (
              <div className="p-5 border bg-palatte-100 border-palatte-500 ">
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
                      value={loginCredentials.email}
                      getValue={v =>
                        setLoginCredentials(prev => ({ ...prev, email: v }))
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
                      value={loginCredentials.password}
                      getValue={v =>
                        setLoginCredentials(prev => ({
                          ...prev,
                          password: v,
                        }))
                      }
                      color="200"
                      required
                      placeholder="Enter Your Password"
                      type={canSeePassword ? "text" : "password"}
                    />
                    <span
                      onClick={() => setCanSeePassword(prev => !prev)}
                      title="Show Password"
                      className="absolute right-0 p-2 cursor-pointer icon-palatte-400 bottom-1 transform"
                    >
                      {Eye}
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="self-end px-3 py-2 border sm:col-span-1 text-palatte-100 border-palatte-100 hover:bg-palatte-400 bg-palatte-300"
                    style={{ height: "fit-content" }}
                  >
                    Login
                  </button>
                </form>
              </div>
            )}
          </div>
          {!isThereAdminAlready && !isEmailConfirmBoxOpen && (
            <>
              <div className="relative mx-4 mt-2 mb-10">
                {isSubmitLoading && <InBoxLoading text={false} />}
                <div className="p-6 border bg-palatte-100 border-palatte-500">
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
                        value={cState.email}
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
                        placeholder="Instagram Profile URL"
                        id="skype:submit"
                        label="Skype URL"
                        textColor="500"
                        name="skype:submit"
                        value={cState.skype}
                        getValue={v =>
                          dispatch({ type: Credentials.SKYPE, value: v })
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
                        value={cState.heroImage}
                        label="Hero Image"
                        getValue={(v, f) => {
                          dispatch({ type: Credentials.HEROIMAGE, value: v })
                          setFiles(prev => ({ ...prev, heroImage: f }))
                        }}
                        color="200"
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
                        pattern=".pdf, .docx, .ppt"
                        name="resumes:submit"
                        value={cState.resumes}
                        getValue={(v, f) => {
                          dispatch({ type: Credentials.RESUMES, value: v })
                          setFiles(prev => ({ ...prev, resumes: f }))
                        }}
                        color="200"
                      />
                    </div>
                    <div className="relative sm:col-span-2">
                      <Input
                        id="password:submit"
                        textColor="500"
                        label="Password"
                        className="w-full"
                        name="password:submit"
                        value={cState.password}
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
                      className="px-3 py-2 border sm:col-span-2 text-palatte-100 border-palatte-100 hover:bg-palatte-400 bg-palatte-300"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {isEnterEmailCodeOpen && (
        <Button
          normal
          outline
          className="w-full"
          onClick={() => setIsEmailConfirmOpen(true)}
        >
          Confirm Your Email
        </Button>
      )}
    </>
  )
}
export default Auth
