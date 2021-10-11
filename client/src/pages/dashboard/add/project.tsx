import { PageProps } from "gatsby"
import React, { FC } from "react"
import AboutTheProject from "../../../components/App/AboutTheProject"
import AddTechCategory from "../../../components/Dashboard/AddTechCategory"
import QAndA from "../../../components/App/QAndA"
import Sketch from "../../../components/App/Sketch"
import TechItem from "../../../components/App/TechItem"
import TheSection from "../../../components/App/TheSection"
import Dash_Layout from "../../../components/Dashboard/Dash_Layout"
import { SEO } from "../../../components/SEO"
import Button from "../../../components/UI/Button"
import QAndA_Add from "../../../components/Dashboard/Q&A_Add"
const AddProject: FC<PageProps> = ({ children, params, data }) => {
  return (
    <>
      <SEO title="Adding PROJECT_NAME" />
      <Dash_Layout>
        <TheSection name="Name of the project" id="name-of-the-project">
          <AboutTheProject editable />
        </TheSection>
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
          <TheSection
            name="Techs Used"
            id="techs-used"
            style={{ paddingBottom: 40 }}
          >
            <AddTechCategory />
            <TechItem
              editable
              border={false}
              style={{ marginLeft: 0 }}
              data={{}}
            />
            <TechItem
              editable
              border={false}
              style={{ marginLeft: 0 }}
              data={{}}
            />
            <TechItem
              editable
              border={false}
              style={{ marginLeft: 0 }}
              data={{}}
            />
          </TheSection>
          <TheSection
            name="Q&A"
            id="Questions-and-answers"
            className="lg:col-span-2 lg:col-start-2"
            style={{ paddingBottom: 40, flex: "1 1 0%" }}
          >
            <QAndA_Add />
            <QAndA editable />
            <QAndA editable />
            <QAndA editable />
          </TheSection>
        </div>
        <TheSection name="Sketches" id="sketches" style={{ marginBottom: 25 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Sketch editable />
            <Sketch editable />
            <Sketch editable />
          </div>
        </TheSection>
        <TheSection
          name="Delete The Project"
          id="delete-the-project"
          style={{ marginBottom: 25, paddingBottom: 25 }}
        >
          <div className="flex items-center gap-2 w-full ml-5">
            <p className="flex-grow font-bold text-sm.4">
              Do you want to delete this project ?
            </p>
            <Button normal>Delete</Button>
          </div>
        </TheSection>
      </Dash_Layout>
    </>
  )
}

export default AddProject
