import React, { FC, PropsWithChildren } from "react"
import ProjectItem from "../App/ProjectItem"
interface Props {
  editable?: boolean
  data: GatsbyTypes.Portfolio_Project[]
}

const Dash_Projects: FC<PropsWithChildren<Props>> = ({
  editable = true,
  data,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {data?.length! > 0 &&
        data?.map(p => (
          <ProjectItem
            key={p.id}
            data={p}
            buttonText="Edit"
            editable={editable}
          />
        ))}
    </div>
  )
}

export default React.memo(Dash_Projects)
