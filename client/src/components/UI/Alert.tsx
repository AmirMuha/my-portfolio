import React, { FC, PropsWithChildren, useEffect } from "react"

import { Close } from "../../icons/iconsJSX"
import { createPortal } from "react-dom"
interface Props {
  header?: boolean
  message: string
  title: string
  autoClose?: number
  onClose: () => void
  backdrop?: boolean
  cb?: () => void
  position?: "TOP" | "BOTTOM" | "CENTER"
}

const Alert: FC<PropsWithChildren<Props>> = ({
  title,
  cb,
  message,
  backdrop = false,
  onClose,
  autoClose = 5,
  position = "TOP",
  header = true,
}) => {
  useEffect(() => {
    if (autoClose) {
      setTimeout(() => {
        onClose()
        cb&&cb()
      }, autoClose * 1000)
    }
  }, [])
  return (
    <>
      {createPortal(
        <>
          {backdrop && (
            <div
              onClick={onClose}
              className="bg-palatte-500 top-0 bottom-0 right-0 left-0 w-full opacity-20 h-full fixed"
            ></div>
          )}
          <dialog
            open
            style={{ padding: 0, maxHeight: "80vh", maxWidth: "600px" }}
            className={`bg-palatte-100 fixed overflow-scroll ${
              position === "TOP"
                ? "top-20"
                : position === "CENTER"
                ? "top-1/2 transform -translate-y-1/2"
                : "bottom-20"
            } w-3/4 border border-palatte-500`}
          >
            <div>
              {header && title && (
                <header className="flex items-center justify-between bg-palatte-500 px-5 py-3 font-bold text-palatte-100">
                  <span>{title}</span>
                  <span className="cursor-pointer" onClick={onClose}>
                    {Close}
                  </span>
                </header>
              )}
              <div className="px-5 py-3 text-center">
                <span>{message}</span>
                {!header && (
                  <span
                    className="cursor-pointer absolute top-0 right-0"
                    onClick={onClose}
                  >
                    {Close}
                  </span>
                )}
              </div>
            </div>
          </dialog>
        </>,
        document.body
      )}
    </>
  )
}

export default Alert
