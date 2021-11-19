import React, { FC, PropsWithChildren } from "react"

import Button from "./Button"
import { Close } from "../../icons/iconsJSX"
import { createPortal } from "react-dom"
const isBrowser = typeof window !== "undefined"
interface Props {
  header?: boolean
  text: string
  title?: string
  confirmButtonText?: string
  notConfirmButtonText?: string
  onClose: () => void
  getValue: (v: boolean) => void
}

const Confirm: FC<PropsWithChildren<Props>> = ({
  confirmButtonText = "Confirm",
  notConfirmButtonText = "Close",
  title,
  text,
  onClose,
  getValue,
  header = false,
}) => {
  return (
    <>
      {isBrowser  && createPortal(
        <>
          <div
            onClick={onClose}
            className="bg-palatte-500 top-0 bottom-0 right-0 left-0 w-full opacity-20 h-full fixed"
          ></div>
          <dialog
            open
            style={{ maxHeight: "80vh", maxWidth: "500px", padding: 0 }}
            className="bg-palatte-100 fixed w-3/4 inset-0 border border-palatte-500"
          >
            <div>
              {header && (
                <header className="flex items-center justify-between bg-palatte-500 px-5 py-3 font-bold text-palatte-100">
                  <span>{title}</span>
                  <span
                    className="cursor-pointer icon-palatte-100 icon-s-1 p-1"
                    onClick={onClose}
                  >
                    {Close}
                  </span>
                </header>
              )}
              <div className="px-5 py-3 text-center">
                <p className="my-3">{text}</p>
                <footer className="flex justify-center items-center gap-2">
                  <Button
                    onClick={() => {
                      getValue(false)
                      onClose()
                    }}
                    outline
                    normal
                    borderColor="500"
                    color="100"
                    textColor="500"
                  >
                    {notConfirmButtonText}
                  </Button>
                  <Button
                    onClick={() => {
                      getValue(true)
                      onClose()
                    }}
                    normal
                    outline
                  >
                    {confirmButtonText}
                  </Button>
                </footer>
              </div>
            </div>
          </dialog>
        </>,
        document.body
      )}
    </>
  )
}

export default Confirm
