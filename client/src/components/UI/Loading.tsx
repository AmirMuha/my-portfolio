import React, { FC, PropsWithChildren } from "react"
import { createPortal } from "react-dom"
interface Props {}

const Loading: FC<PropsWithChildren<Props>> = props => {
  return (
    <>
      {createPortal(
        <div className="px-10 py-5 fixed inset-0 bg-palatte-500">
          <div className="flex-col gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              className="animate-spin mx-auto w-10 h-10 my-3 text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="#FFE1D0"
                strokeWidth={4}
              ></circle>
              <path
                className="opacity-75"
                fill="#FFE1D0"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <div className="text-palatte-100 text-md text-thin">Loading...</div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default Loading
