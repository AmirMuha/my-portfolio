import React, { FC, PropsWithChildren } from "react"

interface Props {
  name: string
}

const TheSetion: FC<PropsWithChildren<Props>> = ({ name, children }) => {
  return (
    <>
      <section className="mt-10">
        <div className="flex gap-0 text-center items-center">
          <div className="w-1/2 bg-palatte-500 h-pipe-sm md:h-pipe-lg"></div>
          <h1 className="capitalize px-3 font-bold bg-palatte-100 text-md transform -translate-x-1/2">
            {name}
          </h1>
        </div>
        {children}
      </section>
    </>
  )
}

export default TheSetion
