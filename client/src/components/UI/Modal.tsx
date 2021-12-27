import React, { FC, PropsWithChildren } from "react"

import { Close } from "../../icons/iconsJSX"
import { createPortal } from "react-dom"

const isBrowser = typeof window !== "undefined"

interface Props {
  onClose: () => void
  maxHeight?: string
  minHeight?: string
  minWidth?: string
  maxWidth?: string
  style?: React.CSSProperties
  containerStyle?: React.CSSProperties
  title?: string
  containerClass?: string
  modalContainerClass?: string
  header: boolean
  stickyHeader?: boolean
}

const Modal: FC<PropsWithChildren<Props>> = ({
  onClose,
  header,
  stickyHeader = false,
  maxHeight,
  minHeight,
  containerClass = "",
  containerStyle,
  modalContainerClass = "",
  minWidth,
  maxWidth,
  children,
  title,
  style,
}) => {
  return (
    <>
      {isBrowser  && createPortal(
        <div className={`${modalContainerClass} z-50`}>
          <div
            onClick={onClose}
            className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-palatte-500 opacity-20"
          ></div>
          <dialog
            open
            style={{
              maxHeight: maxHeight || "80vh",
              maxWidth: maxWidth || "900px",
              minWidth: minWidth || "auto",
              minHeight: minHeight || "auto",
              padding: 0,
              ...style,
            }}
            className="fixed z-50 w-3/4 overflow-scroll border bg-palatte-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-palatte-500"
          >
            {header && (
              <header
                style={{ zIndex: 1 }}
                className={`bg-palatte-500 ${
                  stickyHeader && "sticky top-0"
                } px-5 flex items-center justify-between py-3 font-bold text-palatte-100`}
              >
                <span className="flex items-center gap-3">{title}</span>
                <span
                  onClick={onClose}
                  className="p-2 cursor-pointer icon-s-1 icon-palatte-100"
                >
                  {Close}
                </span>
              </header>
            )}
            <div
              className={`py-3 px-5 ${containerClass}`}
              style={containerStyle}
            >
              {children}
            </div>
          </dialog>
        </div>,
        document.body
      )}
    </>
  )
}

export default Modal
