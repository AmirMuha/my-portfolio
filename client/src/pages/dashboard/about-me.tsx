import { PageProps } from "gatsby"
import React, { FC, useReducer } from "react"
import { bindActionCreators, Reducer } from "redux"
import InPageMenu from "../../components/App/InPageMenu"
import TheSection from "../../components/App/TheSection"
import Dash_Layout from "../../components/Dashboard/Dash_Layout"
import Editable from "../../components/Dashboard/Editable"
import { SEO } from "../../components/SEO"

const sampleText = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
expedita quia modi quasi eveniet dolorum esse temporibus? Alias
quibusdam rem dolorem explicabo consequatur eaque autem a aperiam
molestias corrupti, possimus sed unde, debitis eum impedit porro
aliquam culpa nulla, odio voluptas ea. Iusto deserunt iste illo
tempora quis, quaerat id ducimus magni vitae necessitatibus aliquid
tempore fuga architecto porro ad esse corporis, consequatur cum!
Ratione expedita dolor porro excepturi? Pariatur facilis similique
tempore quia laborum mollitia odio, quae modi ipsum sed voluptates
sunt exercitationem cupiditate tempora dolorum debitis vel rerum
quibusdam earum, totam, consequuntur commodi hic aliquid. Cumque
reprehenderit atque commodi facilis dolorum, laborum beatae ea amet
ad possimus, perspiciatis provident, minima deserunt ex numquam
aspernatur cum! Error, aspernatur nam!
`
interface AboutMe {
  id: string
  name: string
  body: string
}
interface AboutMeState {
  abouts: AboutMe[]
}
interface AboutMeAction {
  type: "EDIT" | "ADD"
  value: {
    name: string
    body: string
    id: string
  }
}
const aboutInitialState: AboutMeState = {
  abouts: [
    {
      id: "1",
      name: "About Me",
      body: sampleText,
    },
    {
      id: "2",
      name: "More About What I Do",
      body: sampleText,
    },
  ],
}
const aboutRedcuer: Reducer<AboutMeState, AboutMeAction> = (state, action) => {
  switch (action.type) {
    case "EDIT":
      let newState: AboutMe[] = []
      if (state) {
        newState = state.abouts.map(({ body, name, id }) => {
          if (action.value.id === id) {
            return {
              id,
              name: action.value.name,
              body: action.value.body,
            }
          } else {
            return {
              name,
              body,
              id,
            }
          }
        })
      }
      return {
        abouts: newState,
      }
    default:
      return (
        state || {
          abouts: [],
        }
      )
  }
}
const EditAboutMe: FC<PageProps> = ({ children, params, data }) => {
  const [abouts, dispatch] = useReducer(aboutRedcuer, aboutInitialState)
  const save = (v: string) => {
    console.log(`Saving the aboutMe`, v)
  }
  return (
    <>
      <SEO title="Adding New AboutMe To Stack" />
      <Dash_Layout>
        <TheSection
          name="What Now ?"
          style={{ paddingBottom: 25 }}
          id="what-now"
        >
          <InPageMenu pipes="left" />
        </TheSection>
        {abouts.abouts.map(({ name, body, id }) => (
          <TheSection
            titleEditable
            titleValue={name}
            getTitleValue={v =>
              dispatch({ type: "EDIT", value: { id, body, name: v } })
            }
            key={id}
            id={id}
            name={name}
          >
            <div className="px-5 pb-8">
              <Editable
                textarea
                textareaRows={20}
                value={body}
                getValue={v =>
                  dispatch({
                    type: "EDIT",
                    value: {
                      id,
                      name,
                      body: v,
                    },
                  })
                }
                onSave={v => save(v)}
                mode="IN_POSITION"
                position="tr"
                positionPlace="inside"
              />
            </div>
          </TheSection>
        ))}
        <div className="mb-10"></div>
      </Dash_Layout>
    </>
  )
}

export default EditAboutMe
