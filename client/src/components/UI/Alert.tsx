import React, { FC, PropsWithChildren, useEffect } from "react"
import { createPortal } from "react-dom"
import { Close } from "../../icons/iconsJSX"
interface Props {
  header?: boolean
  message: string
  title: string
  autoClose?: number
  onClose: () => void
}

const Alert: FC<PropsWithChildren<Props>> = ({
  title,
  message,
  onClose,
  autoClose = 5000,
  header = true,
}) => {
  useEffect(() => {
    if (autoClose) {
      setTimeout(() => {
        onClose()
      }, autoClose)
    }
  }, [])
  return (
    <>
      {createPortal(
        <>
          <div onClick={onClose} className="fixed inset-0 bg-opacity-0"></div>
          <dialog
            open
            style={{ padding: 0, maxHeight: "80vh", maxWidth: "500px" }}
            className="bg-palatte-100 fixed overflow-scroll top-20 right-5 w-3/4 border border-palatte-500"
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
