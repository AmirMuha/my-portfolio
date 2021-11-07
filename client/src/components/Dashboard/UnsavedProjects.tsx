import React, { FC, memo, useEffect } from "react"
import { deleteUnsavedProjectReducer, fetchUnsavedProjectsReducer } from "../../store/unsavedProjectsSclice"
import { useTheDispatch, useTheSelector } from "../../store/store"

import Alert from "../UI/Alert"
import { Delete } from "../../icons/iconsJSX"
import { DeleteFileMutation } from "../../util/mutations"
import { Link } from "gatsby"
import TheSection from "../App/TheSection"
import { useAlert } from "../../util/useAlert"
import { useMutation } from "@apollo/client"

interface Props {
  param?: string
  isNameChanged?: boolean
}

const UnsavedProjects: FC<Props> = ({ param,isNameChanged  }) => {
  const dispatch = useTheDispatch()
  const {projects: unsavedProjects} = useTheSelector(state => state.unsavedProjects)
  const [mutateDeleteImage] = useMutation(DeleteFileMutation)
  const {
    isOpen: alertIsOpen,
    message: alertMessage,
    title: alertTitle,
    setAlert,
  } = useAlert()

  useEffect(() => {
    dispatch(fetchUnsavedProjectsReducer({}))
  }, [param,isNameChanged])

  const deleteUnfinishedProject = (name: string) => {
    if (name === param) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: "Sorry, you can't delete currently editing project.",
      })
      return
    }

    const proj = unsavedProjects.find(p => p.name === name)
    if (proj) {
      if (!/default/.test(proj.image)) {
        mutateDeleteImage({
          variables: {
            filename: proj.image,
          },
        })
      }
      dispatch(
        deleteUnsavedProjectReducer({
          name,
        })
      )
    }
  }

  return (
    <>
      {alertIsOpen && (
        <Alert
          backdrop
          onClose={() => setAlert({ isOpen: false })}
          message={alertMessage}
          title={alertTitle}
        />
      )}
      {unsavedProjects.length > 0 && (
        <TheSection
          name="Pick Up Where You Left"
          id="pick-up-where-you-left"
          style={{ paddingBottom: 25 }}
          textClassName="sm:text-sm"
        >
          <div className="mx-5">
            <p>Projects you've been working on and haven't saved yet :</p>
            <div className=" m-2">
              <ul className="grid grid-cols-1 gap-y-2 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                {unsavedProjects.map(p => (
                  <li
                    className="py-2 border-b border-palatte-500 flex items-center justify-between my-1"
                    key={p.name}
                  >
                    <Link to={`/dashboard/add/project/${p.name}`}>
                      {p.name}
                    </Link>
                    <span
                      onClick={() => deleteUnfinishedProject(p.name)}
                      className="cursor-pointer"
                    >
                      {Delete}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TheSection>
      )}
    </>
  )
  }
export default memo(UnsavedProjects)
