import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React, { FC, PropsWithChildren, useState } from "react"
import audio from "../../04 Future.mp3"
import { GitHub } from "../../icons/iconsJSX"
import Editable from "../Dashboard/Editable"
import Audio from "../UI/Audio"
import Button from "../UI/Button"
import { File } from "../UI/Input"
import SmallPipe from "../UI/SmallPipe"
import Markdown from "../utility/Markdown"
interface Props {
  image: IGatsbyImageData
  editable?: boolean
  data: GatsbyTypes.Portfolio_Project
}
const AboutTheProject: FC<PropsWithChildren<Props>> = ({
  editable = false,
  image,
  data,
}) => {
  const [summary, setSummary] = useState<string>(data.summary)
  const [imageFile, setImage] = useState<any>(null)
  const [audioFile, setAudio] = useState<any>(null)
  const [githubUrl, setGithubUrl] = useState<string>("")
  const [appUrl, setAppUrl] = useState<string>("")
  const updateGithubUrl = () => {
    // mutate the update
    console.log("Updating the github url ...")
  }
  const updateAppUrl = () => {
    // mutate the update
    console.log("Updating the app url ...")
  }
  const updateImage = () => {
    // mutate the update
    console.log("Updating the image ...")
  }
  const updateAudio = () => {
    // mutate the update
    console.log("Updating the audio ...")
  }
  const updateSummary = (v: string) => {
    // mutate the update
    console.log("Updating the summary, new Value => " + v)
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
  const getImageFile = (f: File) => {
    console.log(f)
    setImage(f)
  }
  const getAudioFile = (f: File) => {
    console.log(f)
    setAudio(f)
  }

  return (
    <div>
      {editable ? (
        <div className="flex flex-col md:flex-row mb-6 ml-5">
          <div className="w-full border-5 border-palatte-500 relative md:border-10">
            <GatsbyImage
              style={{
                maxHeight: 400,
                minHeight: 300,
                minWidth: 300,
                maxWidth: 500,
              }}
              image={image!}
              alt={`${data.name} Image`}
            />
            <span className="absolute top-0 left-0 bg-palatte-300 opacity-50 w-full h-full"></span>
            <div className="flex justify-between m-1.5 items-center">
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
          <div className="flex-col flex-grow ml-7 border-l-5 border-palatte-500 relative md:border-l-0 md:ml-0 pt-5 md:pt-0 md:mt-5">
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
            <Editable
              className="px-5 py-3"
              mode="IN_POSITION"
              textarea
              position="tr"
              getValue={getSummary}
              onSave={updateSummary}
              value={summary}
            />
            {false && (
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
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row mb-6 ml-5 ">
          <div
            style={{
              maxHeight: 400,
              minHeight: 300,
              minWidth: 300,
            }}
            className="w-full border-5 overflow-hidden border-palatte-500 relative md:border-10"
          >
            <GatsbyImage
              className="w-full"
              image={image!}
              alt={`${data.name} Image`}
            />
            <span className="absolute top-0 left-0 bg-palatte-300 opacity-50 w-full h-full"></span>
            <div className="flex justify-between m-1.5 items-center">
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
          <div className="flex-col ml-7 border-l-5 border-palatte-500 relative md:border-l-0 md:ml-0 pt-5 md:pt-0 md:mt-5">
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
            {false && (
              <div className="">
                <SmallPipe pipeClassName="hidden md:flex">
                  <Audio src={audio} />
                </SmallPipe>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default AboutTheProject
