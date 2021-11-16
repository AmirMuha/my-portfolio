import React, { FC, PropsWithChildren } from "react"

import Button from "../UI/Button"
import {Project} from "../../types/graphql-types"

interface Props {
  projects: Project[]
  onClose?: () => void
}

const Dash_Menu: FC<PropsWithChildren<Props>> = ({ onClose, projects }) => {
  return (
    <div className="relative h-full text-palatte-100">
      <button onClick={onClose} className="absolute top-5 left-5">
        <svg width="17" height="17" viewBox="0 0 17 17">
          <path
            d="M1.19688 0.000831642L0 1.19765L7.3052 8.5L0 15.8032L1.19771 17L8.50042 9.69516L15.804 16.9992L17 15.8032L9.69563 8.5L17 1.19682L15.8031 0L8.50042 7.30484L1.19688 0.000831642Z"
            fill="#FFE1D0"
          />
        </svg>
      </button>
      <div className="grid grid-cols-1 grid-rows-4 h-full justify-between items-center">
        <div className="self-start pt-20 text-center row-span-3">
        {
          projects && projects.length > 0 &&  
          <div className="mx-auto inline-block w-2/3 border-l-2 border-b-2 border-palatte-100 pl-1 pb-1 ">
            <div className="font-bold text-left">
              <h3 className="bg-palatte-500 inline -ml-2 pt-3 text-sm.4">
                Projects
              </h3>
            </div>
            <div className="gap-1 grid grid-cols-1 ">
            {
              projects.length > 0 && projects.map(p => (
                <Button
                  key={p.id}
                  style={{ padding: "5px 10px" }}
                  color="200"
                  textColor="500"
                  className="w-full"
                  toUrl={`/dashboard/projects/${p.id}`}
                >
                  Project 1
                </Button>
              ))
            }
            </div>
          </div>
        }
          <div className="mx-auto inline-block mt-10 w-2/3 border-l-2 border-b-2 border-palatte-100 pl-1 pb-1 ">
            <div className="font-bold text-left">
              <h3 className="bg-palatte-500 inline -ml-2 pt-3 text-sm.4">
                Edit
              </h3>
            </div>
            <div className="gap-1 grid grid-cols-1 ">
              <Button
                style={{ padding: "5px 10px" }}
                color="200"
                textColor="500"
                className="w-full"
                toUrl="/dashboard/about-me"
              >
                About Me
              </Button>
              <Button
                style={{ padding: "5px 10px" }}
                color="200"
                textColor="500"
                className="w-full"
                toUrl="/dashboard/profile"
              >
                Profile
              </Button>
            </div>
          </div>
        </div>
        <div className="text-center grid grid-cols-1 self-end gap-2 m-3">
          <Button
            to="/dashboard/messages"
            outline
            borderColor="100"
            color="500"
            textColor="100"
          >
            Messages
          </Button>
          <Button
            to="/dashboard"
            outline
            borderColor="100"
            color="500"
            textColor="100"
          >
            Dashboard
          </Button>
          <Button to="/" outline color="100" textColor="500">
            <div className="flex justify-between items-center">
              <div className="">back to the website</div>
              <svg width="20" className="m-0" height="17" viewBox="0 0 20 17">
                <path
                  d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z"
                  fill="#1E0B00"
                />
              </svg>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Dash_Menu
