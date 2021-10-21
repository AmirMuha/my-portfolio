import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react"
// import audio from "../../04 Future.mp3"
import { GitHub } from "../../icons/iconsJSX"
import { useTheDispatch } from "../../store/store"
import Editable from "../Dashboard/Editable"
// import Audio from "../UI/Audio"
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
import { UploadSingleFileMutation } from "../../util/mutations"
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
  const [mutateImage, mutateImageResult] = useMutation(UploadSingleFileMutation)
  const imageRef = useRef<HTMLImageElement>()
  const addNewProjectDispatch = useTheDispatch()
  const [imageName, setImageName] = useState<string>("")
  const [imageFile, setImageFile] = useState<FileList & Array<BlobPart>>()
  // const [audioFile, setAudio] = useState<any>(null)
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
      console.log("Updating the github url ...")
    }
  }
  const updateAppUrl = () => {
    // mutate the update
    if (mode === "ADD") {
      addNewProjectDispatch(setAppUrlReducer({ url: appUrl }))
    } else {
      console.log("Updating the app url ...")
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
          .catch(e => console.log(e))
      }
      // also upload it to the server so when the user came back to edit he has this image and you can show it to them
    } else {
      console.log("Updating the image ...")
      console.log(imageFile)
    }
  }
  const updateSummary = (v: string) => {
    // mutate the update
    if (mode === "ADD") {
      addNewProjectDispatch(setSummaryReducer({ summary }))
    } else {
      console.log("Updating the summary, new Value => " + v)
    }
  }
  const getGithubUrl = (v: string) => {
    console.log(v)
    setGithubUrl(v)
  }
  const getAppUrl = (v: string) => {
    console.log(v)
    setAppUrl(v)
  }
  const getSummary = (v: string) => {
    console.log(v)
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
  // const getAudioFile = (f: File) => {
  //   console.log(f)
  //   setAudio(f)
  // }

  return (
    <div>
      {editable ? (
        <div className="flex flex-col md:flex-row mb-6 ml-5">
          <div
            style={{
              maxHeight: 400,
              minHeight: 300,
              minWidth: 300,
              maxWidth: 500,
            }}
            className="w-full overflow-x-auto overflow-y-hidden flex-grow border-5 border-palatte-500 relative md:border-10"
          >
            <div>
              <img
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
            {/* {false && (
              <div className="relative">
                <SmallPipe pipeClassName="hidden md:flex">
                  <Audio src={audio} />
                  <Editable
                    file
                    acceptableFileTypes="audio/*"
                    mode="IN_POSITION"
                    onSave={updateAudio}
                    getValue={getAudioFile}
                    value=""
                  />
                </SmallPipe>
              </div>
            )} */}
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row mb-6 ml-5 ">
          <div
            style={{
              maxHeight: 400,
              minHeight: 300,
              minWidth: 300,
              maxWidth: 500,
            }}
            className="w-full flex-grow border-5 overflow-hidden border-palatte-500 relative md:border-10"
          >
            <div>
              <GatsbyImage
                image={image as IGatsbyImageData}
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
            {/* {false && (
              <div className="">
                <SmallPipe pipeClassName="hidden md:flex">
                  <Audio src={audio} />
                </SmallPipe>
              </div>
            )} */}
          </div>
        </div>
      )}
    </div>
  )
}

export default AboutTheProject
