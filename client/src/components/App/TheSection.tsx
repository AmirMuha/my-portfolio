import React, { CSSProperties, FC, PropsWithChildren, useState } from "react"

import { Delete } from '../../icons/iconsJSX';
import Editable from "../Dashboard/Editable"

interface Props {
  name: string
  className?: string
  textClassName?: string
  lgText?: string
  id: string
  style?: CSSProperties
  titleEditable?: boolean
  titleValue?: string
  getTitleValue?: (v: string) => void
  onSaveTitleValue?: (v: string) => void
  onDeleteSection?: () => void
}

const TheSection: FC<PropsWithChildren<Props>> = ({
  name,onDeleteSection,
  titleEditable = false,
  getTitleValue,
  titleValue,
  lgText = "md",
  style,
  textClassName,
  children,
  id,
  onSaveTitleValue,
  className,
}) => {
  const updateTitle = (v: string) => {
    onSaveTitleValue && onSaveTitleValue(v)
  }
  return (
    <>
      <section
        id={id}
        style={style}
        className={`${className} relative mt-10 border-l-5 md:border-l-10 border-palatte-500 border-b-5`}
      >
        <div
          style={{ width: "100vw", bottom: "-5px" }}
          className={`h-pipe-sm md:h-pipe-lg bg-palatte-500 absolute left-0`}
        ></div>
        <div className="flex gap-0 text-center items-start">
          <div className={`w-1/2 bg-palatte-500 h-pipe-sm md:h-pipe-lg`}></div>
          {titleEditable ? (
            <h1
              className={`${textClassName} flex items-center gap-2 capitalize relative px-3 font-bold bg-palatte-100 text-sm lg:text-${
                lgText || "md"
              } transform -translate-x-1/2 -translate-y-1/2`}
            >
              {name}
              <Editable
                custom
                title={`Editing ${name}`}
                inputType="text"
                customInputId={`section-${name.split(/\s/).join("-")}`}
                onSave={v => updateTitle(v)}
                mode="MODAL"
                editButtonStyle={{ position: "initial" }}
                getValue={v => getTitleValue && getTitleValue(v)}
                value={titleValue}
              />
              {
                onDeleteSection &&
                <button onClick={onDeleteSection}>{Delete}</button>
              }
            </h1>
          ) : (
            <h1
              className={`${textClassName} capitalize  px-3 font-bold bg-palatte-100 text-sm lg:text-${
                lgText || "md"
              } transform -translate-x-1/2 -translate-y-1/2`}
            >
              {name}
            </h1>
          )}
        </div>
        {children}
      </section>
    </>
  )
}

export default TheSection
