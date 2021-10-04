import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react"

interface Props {
  src: string
}

type VolumeModes = "NOT_MUTE" | "MUTE"
const Audio: FC<PropsWithChildren<Props>> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>()
  const progressRef = useRef<HTMLInputElement>()
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [volumeMode, setVolumeMode] = useState<VolumeModes>("NOT_MUTE")
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.value = "0"
    }
  }, [])
  const play = () => {
    audioRef.current?.play()
    setIsPlaying(true)
  }
  const pause = () => {
    audioRef.current?.pause()
    setIsPlaying(false)
  }
  const changeCurrentPlayTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current)
      audioRef.current.currentTime = parseFloat(e.currentTarget.value)
  }
  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      if (audioRef.current.muted || e.currentTarget.value !== "0") {
        audioRef.current.muted = false
        setVolumeMode("NOT_MUTE")
      }
      if (e.currentTarget.value === "0") {
        setVolumeMode("MUTE")
      }
      audioRef.current.volume = parseFloat(e.currentTarget.value)
    }
  }
  const stop = () => {
    audioRef.current?.pause()
    if (audioRef.current) audioRef.current.currentTime = 0
    setIsPlaying(false)
  }
  const timeUpdate = (e: React.ChangeEvent<HTMLAudioElement>) => {
    if (progressRef.current && audioRef.current) {
      if (e.currentTarget.ended) {
        progressRef.current.value = "0"
        audioRef.current.currentTime = 0
        setIsPlaying(false)
      } else {
        progressRef.current.value = audioRef.current.currentTime.toString()
      }
    }
  }
  const mute = () => {
    if (audioRef.current && progressRef.current) {
      if (!audioRef.current.muted) {
        setVolumeMode("MUTE")
      }
      if (audioRef.current.muted || progressRef.current.value === "0") {
        setVolumeMode("NOT_MUTE")
      }
      audioRef.current.muted = !audioRef.current.muted
    }
  }

  return (
    <div className="w-full py-2 px-3 border-l-0 md:border-l border border-palatte-500">
      <audio
        onTimeUpdate={timeUpdate}
        src={src}
        ref={audioRef as any}
        controls={false}
      ></audio>
      <div className="flex items-center gap-3 content-center">
        {!isPlaying ? (
          <button onClick={play}>
            <svg
              width="15"
              height="19"
              viewBox="0 0 15 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0V19L15 9.5L0 0Z" fill="#1E0B00" />
            </svg>
          </button>
        ) : (
          <button onClick={pause}>
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 18H5.33333V0H0V18ZM10.6667 0V18H16V0H10.6667Z"
                fill="#1E0B00"
              />
            </svg>
          </button>
        )}
        <button onClick={stop}>
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H16V15H0V0Z" fill="#1E0B00" />
          </svg>
        </button>
        <input
          type="range"
          className="flex-grow"
          ref={progressRef as any}
          onChange={changeCurrentPlayTime}
          step="0.01"
          min="0"
          max={audioRef.current?.duration}
        />
        {volumeMode === "MUTE" && (
          <button onClick={mute}>
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 11.5C16.5 9.23833 15.2533 7.29611 13.4444 6.35056V9.17444L16.4389 12.305C16.4756 12.0494 16.5 11.7811 16.5 11.5V11.5ZM19.5556 11.5C19.5556 12.7011 19.3111 13.8256 18.8956 14.8733L20.7411 16.8028C21.5478 15.2183 22 13.4167 22 11.5C22 6.03111 18.3456 1.45667 13.4444 0.293889V2.92611C16.9767 4.025 19.5556 7.44944 19.5556 11.5ZM1.55222 0L0 1.62278L5.78111 7.66667H0V15.3333H4.88889L11 21.7222V13.1228L16.1944 18.5533C15.3756 19.2178 14.4589 19.7417 13.4444 20.0611V22.6933C15.1311 22.2972 16.6589 21.4794 17.9544 20.3806L20.4478 23L22 21.3772L11 9.87722L1.55222 0ZM11 1.27778L8.44556 3.94833L11 6.61889V1.27778Z"
                fill="#1E0B00"
              />
            </svg>
          </button>
        )}
        {volumeMode === "NOT_MUTE" && (
          <button onClick={mute}>
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 7.23717V14.7628H5.11111L11.5 21.0342V0.965792L5.11111 7.23717H0ZM17.25 11C17.25 8.77993 15.9467 6.87343 14.0556 5.94527V16.0422C15.9467 15.1266 17.25 13.2201 17.25 11ZM14.0556 0V2.58381C17.7483 3.66249 20.4444 7.02395 20.4444 11C20.4444 14.9761 17.7483 18.3375 14.0556 19.4162V22C19.1794 20.8586 23 16.3683 23 11C23 5.6317 19.1794 1.14139 14.0556 0V0Z"
                fill="#1E0B00"
              />
            </svg>
          </button>
        )}
        <input
          type="range"
          min="0"
          step="0.01"
          className="flex-shrink w-16"
          onChange={changeVolume}
          max="1"
        />
      </div>
    </div>
  )
}

export default Audio
