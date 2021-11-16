import {
  Admin,
  AdminCreateInput,
  useAdminQuery,
  useChangePasswordMutation,
  useUpdateAdminMutation,
  useUpdateImageMutation,
  useUpdateResumesMutation,
  useVerifyPasswordMutation,
} from "../../types/graphql-types"
import React, { FC, Reducer, useEffect, useReducer, useState } from "react"

import Alert from "../../components/UI/Alert"
import Button from "../../components/UI/Button"
import Confirm from "../../components/UI/Confirm"
import Dash_Layout from "../../components/Dashboard/Dash_Layout"
import Editable from "../../components/Dashboard/Editable"
import { Eye } from "../../icons/iconsJSX"
import Input from "../../components/UI/Input"
import { PageProps } from "gatsby"
import { SEO } from "../../components/SEO"
import TheSection from "../../components/App/TheSection"
import { navigate } from "gatsby"
import { useAlert } from "../../util/useAlert"
import { useAlertGraphqlError } from "../../util/useAlertGraphqlError"
import { useAuth } from "../../util/useAuth"

type ReducerTypes =
  | "EMAIL"
  | "SET_ADMIN"
  | "LNAME"
  | "FNAME"
  | "HERO IMAGE"
  | "GITHUB"
  | "INSTAGRAM"
  | "LINKEDIN"
  | "SKYPE"
  | "WHATSAPP"
type ReducerState = AdminCreateInput
interface ReducerAction {
  type: ReducerTypes
  value: string | AdminCreateInput
  setAlert?: (data: { isOpen: boolean; title: string; message: string }) => void
}
const reducerInitialState: ReducerState = {
  email: "",
  fname: "",
  lname: "",
  github: "",
  heroImage: "",
  instagram: "",
  linkedIn: "",
  skype: "",
  whatsapp: "",
  password: "",
}

const reducer: Reducer<ReducerState, ReducerAction> = (state, action) => {
  if (!action.value && action.setAlert) {
    action.setAlert({
      isOpen: true,
      title: "Error",
      message: `Field ${action.type.toLowerCase()} is required. Please provide some proper value.`,
    })
    return state
  }
  switch (action.type) {
    case "EMAIL":
      return {
        ...state,
        email: action.value,
      }
    case "FNAME":
      return {
        ...state,
        fname: action.value,
      }
    case "LNAME":
      return {
        ...state,
        lname: action.value,
      }
    case "GITHUB":
      return {
        ...state,
        github: action.value,
      }
    case "LINKEDIN":
      return {
        ...state,
        linkedIn: action.value,
      }
    case "WHATSAPP":
      return {
        ...state,
        whatsapp: action.value,
      }
    case "SKYPE":
      return {
        ...state,
        skype: action.value,
      }
    case "HERO IMAGE":
      return {
        ...state,
        heroImage: action.value,
      }
    case "SET_ADMIN":
      if (typeof action.value !== "string") {
        return action.value as any
      } else {
        return state
      }
    default:
      return state
  }
}

const Profile: FC<PageProps> = () => {
  const { data: isLoggedIn, error: loginCheckError } = useAuth()
  if (!isLoggedIn && loginCheckError) {
    navigate("/dashboard/auth/")
    return null
  }
  const [resumes, setResumes] = useState<{ files: any; name: string }>({
    files: undefined,
    name: "",
  })
  const [heroImage, setHeroImage] = useState<{ file: any; name: string }>({
    file: undefined,
    name: "",
  })
  const [canSeePassword_old, setCanSeePassword_old] = useState<boolean>(false)
  const [canSeePassword_new, setCanSeePassword_new] = useState<boolean>(false)
  const [canSeePassword_confirm, setCanSeePassword_confirm] =
    useState<boolean>(false)
  const [password, setPassword] = useState<{
    oldPassword: string
    newPassword: string
    confirmPassword: string
  }>({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const { data, refetch } = useAdminQuery()
  const [adminState, dispatch] = useReducer(reducer, reducerInitialState)
  const [
    mutateHeroImageUpdate,
    { error: updateImageError, loading: updateImageLoading },
  ] = useUpdateImageMutation()
  const [
    mutateUpdateResumes,
    { error: updateResumesError, loading: updateResumesLoading },
  ] = useUpdateResumesMutation()
  const [
    mutateAdminUpdate,
    { error: updateAdminError, loading: updateAdminLoading },
  ] = useUpdateAdminMutation()
  const [
    mutateVerifyPassword,
    { error: verifyPasswordError, loading: verifyPasswordLoading },
  ] = useVerifyPasswordMutation()
  const [
    mutateChangePassword,
    { error: resetPasswordError, loading: resetPasswordLoading },
  ] = useChangePasswordMutation()
  const {
    isOpen: isAlertOpen,
    title: alertTitle,
    message: alertMessage,
    setAlert,
  } = useAlert()

  useAlertGraphqlError(updateAdminError, updateAdminLoading, setAlert)
  useAlertGraphqlError(verifyPasswordError, verifyPasswordLoading, setAlert)
  useAlertGraphqlError(resetPasswordError, resetPasswordLoading, setAlert)
  useAlertGraphqlError(updateImageError, updateImageLoading, setAlert)
  useAlertGraphqlError(updateResumesError, updateResumesLoading, setAlert)

  useEffect(() => {
    if (data && data.me) {
      dispatch({ type: "SET_ADMIN", value: data.me as any })
    }
  }, [data])

  const updateAdmin = (
    value: string,
    field: keyof AdminCreateInput,
    type: ReducerTypes
  ) => {
    if (!value) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: `Field ${field} is required, please provide some proper value.`,
      })
      return
    }
    if (data && data.me && data.me[field]) {
      mutateAdminUpdate({
        variables: {
          email: data?.me.email,
          data: {
            [field]: { set: value },
          },
        },
      })
        .then(() => {
          setAlert({
            isOpen: true,
            title: "Success",
            message: `Updated ${field} successfully.`,
          })
        })
        .catch(() => {
          dispatch({
            type,
            value: data.me![field],
          })
        })
    }
  }

  const changePassword = () => {
    let isShorter = false
    for (const p in password) {
      if (password[p] && password[p].length <= 7) {
        isShorter = true
      }
    }
    if (isShorter) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: "Passwords should be at least 8 charectors long.",
      })
      return
    }
    if (password.newPassword !== password.confirmPassword) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: "'New password' and 'confirm password' do not match.",
      })
      return
    }
    mutateVerifyPassword({
      variables: {
        oldPassword: password.oldPassword,
      },
    })
      .then(() => {
        if (data && data.me) {
          mutateChangePassword({
            variables: {
              email: data.me.email,
              newPassword: password.newPassword,
            },
          })
            .then(() => {
              setAlert({
                isOpen: true,
                title: "Success",
                message: "Changed password successfully.",
              })
            })
            .catch(() => {})
        }
      })
      .catch(() => {})
  }

  const updateHeroImage = () => {
    if (!heroImage.file || !heroImage.name) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: `Please choose an image first to the HeroImage.`,
      })
      return
    }
    if (!adminState) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: "Something went wrong, please refresh the page and try again.",
      })
      return
    }
    mutateHeroImageUpdate({
      variables: {
        prevname: adminState.heroImage,
        file: heroImage.file,
        isEdit: true,
      },
    })
      .then(() => {
        setAlert({
          isOpen: true,
          title: "Success",
          message: "Updated heroImage successfully.",
        })
        setHeroImage({file: undefined, name: ""})
      })
      .catch(() => {})
  }

  const updateResumes = () => {
    if (!resumes.files && !resumes.name) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: "Please choose the new resumes first to update them.",
      })
      return
    }
    if (!adminState) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: "Something went wrong, please refresh the page and try again.",
      })
      return
    }
    mutateUpdateResumes({
      variables: {
        oldResumes:
          typeof adminState?.resumes! === "object"
            ? (adminState?.resumes! as any)
            : adminState.resumes,
        newResumes: resumes.files,
      },
    })
      .then(res => {
        if (res.data) {
          mutateAdminUpdate({
            variables: {
              email: adminState.email,
              data: {
                resumes: {
                  set: res.data?.uploadMultipleFiles,
                },
              },
            },
          })
            .then(() => {
              refetch()
              setAlert({
                isOpen: true,
                title: "Success",
                message: "Updated resumes successfully.",
              })
              setResumes({files: undefined, name: ""})
            })
            .catch(() => {})
        } else {
          setAlert({
            isOpen: true,
            title: "Error",
            message:
              "Unknown Error: Something went wrong, please try again later.",
          })
        }
      })
      .catch(() => {})
  }

  return (
    <>
      {isAlertOpen && (
        <Alert
          onClose={() => setAlert({ isOpen: false })}
          backdrop
          title={alertTitle}
          message={alertMessage}
          header
        />
      )}
      <SEO title="Profile" />
      <Dash_Layout>
        {adminState && (
          <>
            <TheSection
              style={{ paddingBottom: "25px" }}
              id={adminState.email}
              name={`Personal Info.`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="ml-5 flex relative gap-2">
                  <span className="font-black">First Name: </span>
                  <span className="font-thin">{adminState.fname}</span>
                  <Editable
                    custom
                    title="Edit First Name"
                    editButtonStyle={{ position: "initial" }}
                    customInputId="profile:fname"
                    onSave={v => updateAdmin(v, "fname", "FNAME")}
                    inputType="text"
                    mode="MODAL"
                    value={adminState.fname}
                    getValue={v => dispatch({ type: "FNAME", value: v })}
                  />
                </div>
                <div className="ml-5 flex relative gap-2">
                  <span className="font-black">Last Name: </span>
                  <span className="font-thin">{adminState.lname}</span>
                  <Editable
                    custom
                    title="Edit Lname Name"
                    editButtonStyle={{ position: "initial" }}
                    customInputId="profile:lname"
                    onSave={v => updateAdmin(v, "lname", "LNAME")}
                    inputType="text"
                    mode="MODAL"
                    value={adminState.lname}
                    getValue={v => dispatch({ type: "LNAME", value: v })}
                  />
                </div>
                <div className="ml-5 flex relative gap-2">
                  <span className="font-black">Email: </span>
                  <span className="font-thin">{adminState.email}</span>
                  <Editable
                    custom
                    title="Edit Email"
                    editButtonStyle={{ position: "initial" }}
                    customInputId="profile:email"
                    onSave={v => updateAdmin(v, "email", "EMAIL")}
                    inputType="email"
                    mode="MODAL"
                    value={adminState.email}
                    getValue={v => dispatch({ type: "EMAIL", value: v })}
                  />
                </div>
                <div className="ml-5 flex relative gap-2 overflow-hidden col-span-2 lg:col-span-1">
                  <span className="font-black">GitHub: </span>
                  <span className="font-thin">{adminState.github}</span>
                  <Editable
                    custom
                    title="Edit GitHub"
                    editButtonStyle={{ position: "initial" }}
                    customInputId="profile:github"
                    onSave={v => updateAdmin(v, "github", "GITHUB")}
                    inputType="url"
                    mode="MODAL"
                    value={adminState.github}
                    getValue={v => dispatch({ type: "GITHUB", value: v })}
                  />
                </div>
                <div className="ml-5 flex relative gap-2 overflow-hidden col-span-2 lg:col-span-1">
                  <span className="font-black">LinkedIn: </span>
                  <span className="font-thin">{adminState.linkedIn}</span>
                  <Editable
                    custom
                    title="Edit LinkedIn"
                    editButtonStyle={{ position: "initial" }}
                    customInputId="profile:linkedIn"
                    onSave={v => updateAdmin(v, "linkedIn", "LINKEDIN")}
                    inputType="url"
                    mode="MODAL"
                    value={adminState.linkedIn}
                    getValue={v => dispatch({ type: "LINKEDIN", value: v })}
                  />
                </div>
                <div className="ml-5 flex relative gap-2 overflow-hidden col-span-2 lg:col-span-1">
                  <span className="font-black">Instagram: </span>
                  <span className="font-thin">{adminState.instagram}</span>
                  <Editable
                    custom
                    title="Edit Instagram"
                    editButtonStyle={{ position: "initial" }}
                    customInputId="profile:instagram"
                    onSave={v => updateAdmin(v, "instagram", "INSTAGRAM")}
                    inputType="url"
                    mode="MODAL"
                    value={adminState.instagram}
                    getValue={v => dispatch({ type: "INSTAGRAM", value: v })}
                  />
                </div>
                <div className="ml-5 flex relative gap-2 overflow-hidden col-span-2 lg:col-span-1">
                  <span className="font-black">Skype: </span>
                  <span className="font-thin">{adminState.skype}</span>
                  <Editable
                    custom
                    title="Edit Skype"
                    editButtonStyle={{ position: "initial" }}
                    customInputId="profile:skype"
                    onSave={v => updateAdmin(v, "skype", "SKYPE")}
                    inputType="url"
                    mode="MODAL"
                    value={adminState.skype}
                    getValue={v => dispatch({ type: "SKYPE", value: v })}
                  />
                </div>
                <div className="ml-5 flex relative gap-2 overflow-hidden col-span-2 lg:col-span-1">
                  <span className="font-black">Whatsapp Number: </span>
                  <span className="font-thin">{adminState.whatsapp}</span>
                  <Editable
                    custom
                    title="Edit Whatsapp"
                    editButtonStyle={{ position: "initial" }}
                    customInputId="profile:whatsapp"
                    onSave={v => updateAdmin(v, "whatsapp", "WHATSAPP")}
                    inputType="url"
                    mode="MODAL"
                    value={adminState.whatsapp}
                    getValue={v => dispatch({ type: "WHATSAPP", value: v })}
                  />
                </div>
                <div className="ml-5 md:flex relative gap-2 overflow-hidden col-span-2"></div>
              </div>
            </TheSection>
            <div className="md:grid grid-cols-2 mb-10">
              <TheSection
                style={{ paddingBottom: "25px" }}
                id="general"
                name={`General`}
              >

                <div className="ml-5 md:mr-5">
                  <div>
                    <Input
                      placeholder="Choose Hero Image"
                      buttonTitle="Choose"
                      id="heroimage:profile"
                      textColor="500"
                      type="file"
                      name="heroimage:profile"
                      value={heroImage.name}
                      label="Hero Image"
                      getValue={(v, f) => {
                        setHeroImage({ name: v, file: f[0] })
                      }}
                      color="200"
                    />
                    <Button normal outline className="w-full mt-2" onClick={updateHeroImage}>
                      Save
                    </Button>
                  </div>
                  <div>
                    <Input
                      placeholder="Choose Resumes"
                      id="resumes:profile"
                      textColor="500"
                      buttonTitle="Choose"
                      type="file"
                      label="Resumes"
                      multiple
                      pattern=".pdf, .docx, .ppt"
                      name="resumes:profile"
                      value={resumes.name}
                      getValue={(v, f) => {
                        setResumes({ name: v, files: f })
                      }}
                      color="200"
                    />
                    <Button normal outline className="w-full mt-2" onClick={updateResumes}>
                      Save
                    </Button>
                  </div>
                </div>
              </TheSection>
              <TheSection
                style={{ paddingBottom: "25px" }}
                id="change-password"
                name="Change Password"
              >
                <div className="ml-5">
                  <div className="w-full mb-2">
                    <div className="w-full relative">
                      <Input
                        id="profile:old-password"
                        label="Old Password"
                        name="profile:old-password"
                        getValue={v =>
                          setPassword(prev => ({ ...prev, oldPassword: v }))
                        }
                        value={password.oldPassword}
                        color="200"
                        textColor="500"
                        containerClasses="w-full"
                        placeholder="Enter your old password"
                        type={canSeePassword_old ? "text" : "password"}
                      />
                      <span
                        onClick={() => setCanSeePassword_old(prev => !prev)}
                        title="Show Password"
                        className="cursor-pointer  p-2 absolute right-0 icon-palatte-400 bottom-1.5 transform"
                      >
                        {Eye}
                      </span>
                    </div>
                    <div className="w-full relative">
                      <Input
                        id="profile:new-password"
                        label="New Password"
                        name="profile:new-password"
                        getValue={v =>
                          setPassword(prev => ({ ...prev, newPassword: v }))
                        }
                        value={password.newPassword}
                        color="200"
                        textColor="500"
                        containerClasses="w-full"
                        placeholder="Enter your new password"
                        type={canSeePassword_new ? "text" : "password"}
                      />
                      <span
                        onClick={() => setCanSeePassword_new(prev => !prev)}
                        title="Show Password"
                        className="cursor-pointer  p-2 absolute right-0 icon-palatte-400 bottom-1.5 transform"
                      >
                        {Eye}
                      </span>
                    </div>
                    <div className="w-full relative">
                      <Input
                        id="profile:password-confirm"
                        label="Confirm New Password"
                        name="profile:password-confirm"
                        getValue={v =>
                          setPassword(prev => ({ ...prev, confirmPassword: v }))
                        }
                        value={password.confirmPassword}
                        color="200"
                        textColor="500"
                        containerClasses="w-full"
                        placeholder="Enter your confirm new password"
                        type={canSeePassword_confirm ? "text" : "password"}
                      />
                      <span
                        onClick={() => setCanSeePassword_confirm(prev => !prev)}
                        title="Show Password"
                        className="cursor-pointer  p-2 absolute right-0 icon-palatte-400 bottom-1.5 transform"
                      >
                        {Eye}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Button
                      normal
                      outline
                      color="100"
                      textColor="500"
                      borderColor="500"
                      onClick={() => {
                        setPassword({
                          oldPassword: "",
                          newPassword: "",
                          confirmPassword: "",
                        })
                      }}
                    >
                      Reset
                    </Button>
                    <Button normal outline onClick={changePassword}>
                      Change Password
                    </Button>
                  </div>
                </div>
              </TheSection>
            </div>
          </>
        )}
      </Dash_Layout>
    </>
  )
}
export default Profile
