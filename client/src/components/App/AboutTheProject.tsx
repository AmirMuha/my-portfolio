import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react"
import { GitHub } from "../../icons/iconsJSX"
import { useTheDispatch } from "../../store/store"
import Editable from "../Dashboard/Editable"
import Button from "../UI/Button"
import {
  setGithubUrlReducer,
  setSummaryReducer,
  setAppUrlReducer,
  setImageReducer,
} from "../../store/newProjectSlice"
import SmallPipe from "../UI/SmallPipe"
import Markdown from "../utility/Markdown"
import { useMutation } from "@apollo/client"
import {
  UpdateProjectAppUrlMutation,
  UpdateProjectgithub_urlMutation,
  UpdateProjectImageMutation,
  UpdateProjectSummaryMutation,
  UpdateProjectTypeMutation,
  UploadSingleFileMutation,
} from "../../util/mutations"
import { useAlert } from "../../util/useAlert"
import Alert from "../UI/Alert"
interface Props {
  image: IGatsbyImageData | string
  editable?: boolean
  data: GatsbyTypes.Portfolio_Project
  mode?: "ADD" | "EDIT" | "NORMAL"
}
const AboutTheProject: FC<PropsWithChildren<Props>> = ({
  editable = false,
  image,
  mode = "NORMAL",
  data,
}) => {
  const {
    message: alertMessage,
    isOpen: isAlertOpen,
    title: alertTitle,
    setAlert,
  } = useAlert()
  const [mutateImage, mutateImageResult] = useMutation(UploadSingleFileMutation)
  const [mutateProjectAppUrlUpdate] = useMutation(UpdateProjectAppUrlMutation)
  const [mutateProjectImageUpdate] = useMutation(UpdateProjectImageMutation)
  const [mutateProjectGithubUrlUpdate] = useMutation(
    UpdateProjectgithub_urlMutation
  )
  const [mutateProjectSummaryUpdate] = useMutation(UpdateProjectSummaryMutation)
  const [mutateProjectTypeUpdate] = useMutation(UpdateProjectTypeMutation)
  const imageRef = useRef<HTMLImageElement>()
  const addNewProjectDispatch = useTheDispatch()
  const [imageName, setImageName] = useState<string>("")
  const [imageFile, setImageFile] = useState<FileList & Array<BlobPart>>()
  const [summary, setSummary] = useState<string>("")
  const [githubUrl, setGithubUrl] = useState<string>("")
  const [appUrl, setAppUrl] = useState<string>("")
  useEffect(() => {
    setSummary(data.summary)
    setImageName(data.image)
    setGithubUrl(data.github_url)
    setAppUrl(data.app_url)
  }, [data])
  const updateGithubUrl = () => {
    // mutate the update
    if (mode === "ADD") {
      addNewProjectDispatch(setGithubUrlReducer({ url: githubUrl }))
    } else {
      mutateProjectGithubUrlUpdate({
        variables: {
          github_url: githubUrl,
          id: data.id,
        },
      })
        .then(res => {
          setGithubUrl(res.data.updateProject.github_url)
          setAlert({
            isOpen: true,
            title: "Success",
            message: "GitHub Url updated successfully !",
          })
        })
        .catch(e => {
          setAlert({
            isOpen: true,
            title: "Error",
            message: e.errors
              ? e.errors[0].message
              : e.message ||
                "Something went wrong, Couldn't update the GitHub Url.",
          })
        })
    }
  }
  const updateAppUrl = () => {
    // mutate the update
    if (mode === "ADD") {
      addNewProjectDispatch(setAppUrlReducer({ url: appUrl }))
    } else {
      mutateProjectAppUrlUpdate({
        variables: {
          app_url: appUrl,
          id: data.id,
        },
      })
        .then(res => {
          setAlert({
            isOpen: true,
            title: "Success",
            message: "App Url updated successfully !",
          })
          setAppUrl(res.data.updateProject.app_url)
        })
        .catch(e => {
          setAlert({
            isOpen: true,
            title: "Error",
            message: e.errors
              ? e.errors[0].message
              : e.message ||
                "Something went wrong, Couldn't update the App Url.",
          })
        })
    }
  }
  const updateImage = () => {
    // mutate the update
    if (mode === "ADD") {
      if (imageFile) {
        mutateImage({
          variables: {
            file: imageFile[0],
          },
        })
          .then(res => {
            setImageName(res.data.uploadSingleFile)
            addNewProjectDispatch(
              setImageReducer({ image: res.data.uploadSingleFile })
            )
          })
          .catch(e => {
            setAlert({
              isOpen: true,
              title: "Error",
              message: e.errors
                ? e.errors[0].message
                : e.message ||
                  "Something went wrong, Couldn't upload the image.",
            })
          })
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
            projectId: data.id,
            prevname: data.image,
          },
        })
          .then(res => {
            console.log(res.data)
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
          })
          .catch(e => {
            setAlert({
              isOpen: true,
              title: "Error",
              message: e.errors
                ? e.errors[0].message
                : e.message ||
                  "Something went wrong, Couldn't update the image.",
            })
          })
      }
    }
  }
  const updateSummary = (v: string) => {
    // mutate the update
    if (mode === "ADD") {
      addNewProjectDispatch(setSummaryReducer({ summary }))
    } else {
      mutateProjectSummaryUpdate({
        variables: {
          summary: summary,
          id: data.id,
        },
      })
        .then(res => {
          setAlert({
            isOpen: true,
            title: "Success",
            message: "Summary updated successfully !",
          })
          setSummary(res.data.updateProject.summary)
        })
        .catch(e => {
          setAlert({
            isOpen: true,
            title: "Error",
            message: e.errors
              ? e.errors[0].message
              : e.message ||
                "Something went wrong, Couldn't update the Summary.",
          })
        })
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
    const i = new Blob(f, { type: f[0].type })
    const s = URL.createObjectURL(i)
    if (imageRef.current) {
      imageRef.current.src = s
    }
    setImageFile(f)
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
        <div className="flex flex-col md:flex-row mb-6 ml-5">
          <div className="w-full overflow-x-auto overflow-y-hidden flex-grow border-5 border-palatte-500 relative md:border-10">
            <div>
              <img
                style={{
                  maxHeight: 400,
                  minHeight: 300,
                  minWidth: 300,
                  maxWidth: 500,
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
          <div className="flex-col flex-grow ml-7 border-l-5 border-b-5 border-palatte-500 relative md:border-0 md:ml-0 pt-5 md:pt-0 md:mt-5">
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
              position="tr"
              getValue={getSummary}
              onSave={updateSummary}
              value={summary}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row mb-6 ml-5 ">
          <div className="w-full flex-grow border-5 overflow-hidden border-palatte-500 relative md:border-10">
            <div>
              <img
                style={{
                  maxHeight: 400,
                  minHeight: 300,
                  minWidth: 300,
                  maxWidth: 500,
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
          <div className="flex-col ml-7 border-l-5 border-b-5 border-palatte-500 relative md:border-0 md:ml-0 pt-5 md:pt-0 md:mt-5">
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
            <div className="px-5 py-3">
              <Markdown>{data.summary}</Markdown>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AboutTheProject
