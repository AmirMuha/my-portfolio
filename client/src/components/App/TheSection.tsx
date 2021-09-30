import React, { FC, PropsWithChildren } from "react"

interface Props {
  name: string
  className?: string
  id: string
}

const TheSection: FC<PropsWithChildren<Props>> = ({
  name,
  children,
  id,
  className,
}) => {
  return (
    <>
      <section
        id={id}
        className={`${className} relative mt-10 border-l-5 md:border-l-10 border-palatte-500 border-b-5`}
      >
        <div
          style={{ width: "100vw", bottom: "-5px" }}
          className="h-pipe-sm md:h-pipe-lg bg-palatte-500 absolute left-0"
        ></div>
        <div className="flex gap-0 text-center items-start">
          <div className="w-1/2 bg-palatte-500 h-pipe-sm md:h-pipe-lg"></div>
          <h1 className="capitalize px-3 font-bold bg-palatte-100 text-md transform -translate-x-1/2 -translate-y-1/2">
            {name}
          </h1>
        </div>
        {children}
      </section>
    </>
  )
}

export default TheSection
