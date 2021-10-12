import React, { FC, PropsWithChildren } from "react"
import { createPortal } from "react-dom"

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
  header: boolean
}

const Modal: FC<PropsWithChildren<Props>> = ({
  onClose,
  header,
  maxHeight,
  minHeight,
  containerClass = "",
  containerStyle,
  minWidth,
  maxWidth,
  children,
  title,
  style,
}) => {
  return (
    <>
      {createPortal(
        <div>
          <div
            onClick={onClose}
            className="bg-palatte-500 top-0 bottom-0 right-0 left-0 w-full opacity-20 h-full fixed"
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
            className="bg-palatte-100 fixed overflow-scroll top-1/2 w-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-palatte-500"
          >
            {header && (
              <header className="bg-palatte-500 px-5 py-3 font-bold text-palatte-100">
                {title}
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
