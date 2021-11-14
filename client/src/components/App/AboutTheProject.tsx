import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react"
import {
  setAppUrlReducer,
  setGithubUrlReducer,
  setImageReducer,
  setSummaryReducer,
  setTypeReducer,
} from "../../store/newProjectSlice"
import {
  useUpdateImageMutation,
  useUpdateProjectAppUrlMutation,
  useUpdateProjectGitHubUrlMutation,
  useUpdateProjectSummaryMutation,
  useUpdateProjectTypeMutation,
  useUploadFileMutation,
} from "../../types/graphql-types"

import Alert from "../UI/Alert"
import Button from "../UI/Button"
import Editable from "../Dashboard/Editable"
import { GitHub } from "../../icons/iconsJSX"
import Markdown from "../utility/Markdown"
import SmallPipe from "../UI/SmallPipe"
import {
  updateProjectFieldReducer
} from "../../store/editProject"
import { useAlert } from "../../util/useAlert"
import { useAlertGraphqlError } from "../../util/useAlertGraphqlError"
import { useTheDispatch } from "../../store/store"

interface Props {
  editable?: boolean
  data: GatsbyTypes.Portfolio_Project
  mode?: "ADD" | "EDIT"
}
const AboutTheProject: FC<PropsWithChildren<Props>> = ({
  editable = false,
  mode = "EDIT",
  data,
}) => {
  const {
    message: alertMessage,
    isOpen: isAlertOpen,
    title: alertTitle,
    setAlert,
  } = useAlert()
  const [mutateImage, { error: uploadFileError, loading: uploadFileLoading }] =
    useUploadFileMutation()
  const [
    mutateProjectGithubUrlUpdate,
    { error: updateGithubUrlError, loading: updateGithubUrlLoading },
  ] = useUpdateProjectGitHubUrlMutation()
  const [mutateProjectImageUpdate] = useUpdateImageMutation()
  const [
    mutateProjectAppUrlUpdate,
    { error: udpateAppUrlError, loading: updateAppUrlLoading },
  ] = useUpdateProjectAppUrlMutation()
  const [
    mutateProjectSummaryUpdate,
    { error: updateSummaryError, loading: updateSummaryLoading },
  ] = useUpdateProjectSummaryMutation()
  const [
    mutateProjectTypeUpdate,
    { error: updateTypeError, loading: updateTypeLoading },
  ] = useUpdateProjectTypeMutation()
  const imageRef = useRef<HTMLImageElement>()
  const addNewProjectDispatch = useTheDispatch()
  const [imageName, setImageName] = useState<string>("")
  const [imageFile, setImageFile] = useState<FileList & Array<BlobPart>>()
  const [summary, setSummary] = useState<string>("")
  const [githubUrl, setGithubUrl] = useState<string>("")
  const [appUrl, setAppUrl] = useState<string>("")
  const [projectType, setProjectType] = useState<string>("")

  useAlertGraphqlError(updateGithubUrlError, updateGithubUrlLoading, setAlert)
  useAlertGraphqlError(uploadFileError, uploadFileLoading, setAlert)
  useAlertGraphqlError(udpateAppUrlError, updateAppUrlLoading, setAlert)
  useAlertGraphqlError(updateSummaryError, updateSummaryLoading, setAlert)
  useAlertGraphqlError(updateTypeError, updateTypeLoading, setAlert)

  useEffect(() => {
    setSummary(data.summary || "Enter a brief summary of the project.")
    setImageName(data.image)
    setGithubUrl(data.github_url)
    setAppUrl(data.app_url)
    setProjectType(data.type)
  }, [data])

  const updateType = () => {
    if (!projectType) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: "Type is required, please provide some value.",
      })
      return
    }
    if (mode === "ADD") {
      addNewProjectDispatch(setTypeReducer({ type: projectType }))
    } else {
      mutateProjectTypeUpdate({
        variables: {
          type: projectType,
          id: data.id,
        },
      }).then(() => {
        setAlert({
          isOpen: true,
          title: "Success",
          message: "Updated project type successfully.",
        })
        addNewProjectDispatch(updateProjectFieldReducer({
          value: projectType,
          field: "type"
        }))
      }).catch(() => {})
    }
  }
  const unknownError = () => {
    setAlert({
      isOpen: true,
      title: "Error",
      message: "Unknown Error: Something went wrong, please try again later.",
    })
  }
  const updateGithubUrl = () => {
    if (!githubUrl) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: "GitHub URL is required, please provide some value.",
      })
      return
    }
    if (mode === "ADD") {
      addNewProjectDispatch(setGithubUrlReducer({ url: githubUrl }))
    } else {
      mutateProjectGithubUrlUpdate({
        variables: {
          github_url: githubUrl,
          id: data.id,
        },
      }).then(res => {
        if (res.data && res.data.updateProject) {
          setGithubUrl(res.data.updateProject.github_url)
          setAlert({
            isOpen: true,
            title: "Success",
            message: "GitHub Url updated successfully !",
          })
        } else {
          unknownError()
        }
      }).catch(() => {})
    }
  }

  const updateAppUrl = () => {
    if (!appUrl) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: "App URL is required, please provide some value.",
      })
      return
    }
    if (mode === "ADD") {
      addNewProjectDispatch(setAppUrlReducer({ url: appUrl }))
    } else {
      mutateProjectAppUrlUpdate({
        variables: {
          app_url: appUrl,
          id: data.id,
        },
      }).then(res => {
        if (res.data && res.data.updateProject) {
          setAlert({
            isOpen: true,
            title: "Success",
            message: "App Url updated successfully !",
          })
          setAppUrl(res.data.updateProject.app_url)
        } else {
          unknownError()
        }
      }).catch(() => {})
    }
  }

  const updateImage = () => {
    if (!imageFile) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: "Image is required, please provide some value.",
      })
      return
    }
    if (mode === "ADD") {
      if (imageFile) {
        if(data.image && data.image.includes("file")) {
          mutateProjectImageUpdate({
            variables: {
              prevname: data.image,
              file: imageFile[0],
              isEdit: false
            }
          })
          .then((res) => {
            if (res.data?.updateImage) {
              setImageName(res.data.updateImage)
              addNewProjectDispatch(
                setImageReducer({ image: res.data.updateImage })
              )
            } else {
              unknownError()
            }
          })
          .catch(() => {
            if (imageRef.current) {
              imageRef.current.src = `${(window as any).__SERVER_API__}/${
                mode === "ADD" ? "temp/" : ""
              }${imageName || "default-project.jpeg"}`
            }
          })
        } else {
          mutateImage({
            variables: {
              file: imageFile[0],
            },
          })
            .then(res => {
              if (res.data) {
                setImageName(res.data.uploadSingleFile)
                addNewProjectDispatch(
                  setImageReducer({ image: res.data.uploadSingleFile })
                )
              } else {
                unknownError()
              }
            })
            .catch(() => {
              if (imageRef.current) {
                imageRef.current.src = `${(window as any).__SERVER_API__}/${
                  mode === "ADD" ? "temp/" : ""
                }${imageName || "default-project.jpeg"}`
              }
            })
        }
      }
    } else {
      if (!imageFile) {
        setAlert({
          isOpen: true,
          title: "Error",
          message: "Please choose the new image.",
        })
      } else {
        mutateProjectImageUpdate({
          variables: {
            file: imageFile[0],
            prevname: data.image,
          },
        })
          .then(res => {
            if (res.data && res.data.updateImage) {
              const isResError =
                res.data.updateImage?.match(/\.(jpeg|jpg|webp|png|svg)$/gi) &&
                res.data.updateImage.includes("ENOENT")
              setAlert({
                isOpen: true,
                title: isResError ? "Error" : "Success",
                message: isResError
                  ? res.data.updateImage
                  : "Image updated successfully !",
              })
              setImageName(res.data.updateImage)
            } else {
              unknownError()
            }
          })
          .catch(e => {
            setAlert({
              isOpen: true,
              title: "Error",
              message:
                e.message ||
                "Something went wrong, couldn't update image, please try again later.",
            })
            if (imageRef.current) {
              imageRef.current.src = `${(window as any).__SERVER_API__}/${
                imageName || "default-project.jpeg"
              }`
            }
          })
      }
    }
  }

  const updateSummary = () => {
    if (!summary) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: "Summary is required, please provide some value.",
      })
      return
    }
    if (mode === "ADD") {
      addNewProjectDispatch(setSummaryReducer({ summary }))
    } else {
      mutateProjectSummaryUpdate({
        variables: {
          summary: summary,
          id: data.id,
        },
      }).then(res => {
        if (res.data && res.data.updateProject) {
          setAlert({
            isOpen: true,
            title: "Success",
            message: "Summary updated successfully !",
          })
          setSummary(res.data.updateProject.summary)
        } else {
          unknownError()
        }
      }).catch(() => {})
    }
  }

  const getGithubUrl = (v: string) => {
    setGithubUrl(v)
  }
  const getAppUrl = (v: string) => {
    setAppUrl(v)
  }
  const getSummary = (v: string) => {
    setSummary(v)
  }

  const getImageFile = (f: FileList & BlobPart[]) => {
    if (!f) {
      if (imageRef.current) {
        imageRef.current.src = `${(window as any).__SERVER_API__}/${
          imageName || "default-project.jpeg"
        }`
      }
      return
    }
    try {
      const i = new Blob(f, { type: f[0].type })
      const s = URL.createObjectURL(i)
      if (imageRef.current) {
        imageRef.current.src = s
      }
      setImageFile(f)
    } catch (e) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: "Please choose an image if you want to change it.",
      })
    }
  }

  return (
    <div>
      {isAlertOpen && (
        <Alert
          onClose={() => setAlert({ isOpen: false })}
          header
          backdrop
          position="TOP"
          message={alertMessage}
          autoClose={3}
          title={alertTitle}
        />
      )}
      {editable ? (
        <div className="flex flex-col lg:flex-row mb-6 ml-5">
          <div
            style={{ maxWidth: "500px" }}
            className="overflow-hidden flex-grow border-5 border-palatte-500 relative md:border-10"
          >
            <div>
              <img
                style={{
                  minWidth: "500px",
                  maxHeight: "300px",
                  objectFit: "cover",
                }}
                ref={imageRef as any}
                src={`${(window as any).__SERVER_API__}/${
                  mode === "ADD" ? "temp/" : ""
                }${imageName || "default-project.jpeg"}`}
                alt={`${data.name || "Default"} Image`}
              />
            </div>
            <span className="absolute top-0 left-0 bg-palatte-300 opacity-50 w-full h-full"></span>
            <div className="flex absolute top-0 right-0 left-0 justify-between m-1.5 items-center">
              <Button
                outline
                disabled
                toUrl="https://github.com/AmirMuha"
                borderColor="100"
                textColor="100"
                color="500"
                className="text-center relative"
                style={{ overflow: "visible", padding: "5px 20px", gap: 0 }}
                icon={GitHub}
                fill
              >
                <Editable
                  customInputId="girhuburl-asf"
                  title="GitHub URL"
                  mode="MODAL"
                  custom
                  inputType="url"
                  onSave={updateGithubUrl}
                  getValue={getGithubUrl}
                  value={githubUrl}
                />
              </Button>
              <Button
                outline
                disabled
                toUrl="https://github.com/AmirMuha"
                borderColor="100"
                textColor="100"
                color="500"
                className="relative"
                style={{ padding: "3px 20px" }}
                fill
              >
                Visit The App
                <Editable
                  customInputId="appurl-asdf"
                  inputType="url"
                  title="App URL"
                  custom
                  mode="MODAL"
                  onSave={updateAppUrl}
                  getValue={getAppUrl}
                  value={appUrl}
                />
              </Button>
            </div>
            <Editable
              file
              positionPlace="inside"
              mode="IN_POSITION"
              acceptableFileTypes="image/*"
              onSave={updateImage}
              getValue={getImageFile}
              value=""
            />
          </div>
          <div
            style={{ maxWidth: "600px" }}
            className="flex-col flex-grow overflow-auto ml-7 border-l-5 border-b-5 md:border-l-10 md:border-b-10 border-palatte-500 relative lg:border-0 lg:ml-0 pt-5 lg:pt-0 lg:mt-5"
          >
            <SmallPipe
              className="mb-4"
              style={{
                display: "block",
              }}
              pipeStyle={{ width: 50 }}
              pipes="left"
            >
              <div className="relative ">
                <div className="flex gap-2 items-center">
                  <h2 className="text-sm lg:text-sm-4 font-bold mx-2">
                    Type :{" "}
                  </h2>
                  <span>{data.type || "Project Type"}</span>
                </div>
                <Editable
                  editButtonStyle={{ marginRight: -50 }}
                  mode="MODAL"
                  position="tr"
                  custom
                  title="Type"
                  inputType="text"
                  onSave={updateType}
                  customInputId="project-type"
                  value={projectType}
                  getValue={v =>
                    setProjectType(v)
                  }
                />
              </div>
            </SmallPipe>
            <SmallPipe
              style={{
                display: "block",
              }}
              pipeStyle={{ width: 50 }}
              pipes="left"
            >
              <h2 className="text-sm lg:text-sm-4 font-bold mx-2">
                Summary Of The Project
              </h2>
            </SmallPipe>
            <Editable
              className="px-5 py-3"
              mode="IN_POSITION"
              textarea
              saveAndCloseContainerStyle={{ marginRight: 20, marginTop: 20 }}
              editButtonStyle={{ marginRight: 20, marginTop: 20 }}
              position="tr"
              getValue={getSummary}
              onSave={updateSummary}
              value={summary}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row mb-6 ml-5 ">
          <div
            style={{ maxWidth: "500px" }}
            className="w-full flex-grow border-5 overflow-hidden border-palatte-500 relative md:border-10"
          >
            <div>
              <img
                style={{
                  minWidth: "500px",
                  maxHeight: "300px",
                  objectFit: "cover",
                }}
                ref={imageRef as any}
                src={`${(window as any).__SERVER_API__}/${imageName}`}
                alt={`${data.name} Image`}
              />
            </div>
            <span className="absolute top-0 left-0 bg-palatte-300 opacity-50 w-full h-full"></span>
            <div className="flex absolute top-0 right-0 left-0 justify-between m-1.5 items-center">
              <Button
                outline
                toUrl="https://github.com/AmirMuha"
                borderColor="100"
                textColor="100"
                color="500"
                className="text-center"
                style={{ padding: "5px 20px", gap: 0 }}
                icon={GitHub}
                fill
              ></Button>
              <Button
                outline
                toUrl="https://github.com/AmirMuha"
                borderColor="100"
                textColor="100"
                color="500"
                style={{ padding: "3px 20px" }}
                fill
              >
                Visit The App
              </Button>
            </div>
          </div>
          <div className="flex-col ml-7 overflow-auto border-l-5 border-b-5 border-palatte-500 relative lg:border-0 lg:ml-0 pt-5 md:pt-0 md:mt-5">
            <SmallPipe
              style={{
                display: "block",
              }}
              pipeStyle={{ width: 50 }}
              pipes="left"
            >
              <h2 className="text-sm.4 font-bold mx-2">
                Summary Of The Project
              </h2>
            </SmallPipe>
            <div className=" px-5 py-3">
              <Markdown>
                {data.summary || "Write a brief summary of the project."}
              </Markdown>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AboutTheProject
