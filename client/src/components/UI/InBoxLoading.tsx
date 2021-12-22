import React, { FC, PropsWithChildren } from "react"

interface Props {
  text?: string | boolean
}

const InBoxLoading: FC<PropsWithChildren<Props>> = ({ text }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-palatte-200 bg-opacity-70">
        <div className="absolute flex-col gap-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            className="w-10 h-10 mx-auto my-3 text-white animate-spin"
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
          {(typeof text === "boolean" || typeof text === "string") && !text && (
            <h2 className="font-bold text-sm.4">
              {typeof text === "string" ? text : "Loading"}
            </h2>
          )}
        </div>
      </div>
    </>
  )
}

export default InBoxLoading
