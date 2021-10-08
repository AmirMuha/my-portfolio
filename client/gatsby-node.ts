import { CreatePagesArgs } from "gatsby"
import path from "path"
interface ProjectQuery {
  portfolio: {
    projects: {
      id: string
    }[]
  }
}
export const createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}: CreatePagesArgs) => {
  const results = await graphql<ProjectQuery>(`
    query {
      portfolio {
        projects {
          id
          name
          image
          type
          github_url
          app_url
          description
          tech_categories {
            id
            name
            techs {
              id
              name
            }
          }
          sketches {
            id
            title
            body
            download_link
            image
          }
          questions {
            id
            question
            answer {
              id
              answer
            }
          }
        }
      }
    }
  `)
  if (results.errors || !results) {
    reporter.panicOnBuild("Error while running graphQL query")
    return
  }
  const ProjectTemplate = path.resolve("./src/templates/Project.tsx")
  const EditableProject = path.resolve("./src/templates/EditableProject.tsx")
  results.data?.portfolio.projects.forEach(async (proj: any) => {
    createPage({
      path: `/projects/${proj.id}`,
      component: ProjectTemplate,
      context: {
        project: proj,
      },
    })
  })
  results.data?.portfolio.projects.forEach(async (proj: any) => {
    createPage({
      path: `/dashboard/projects/${proj.id}`,
      component: EditableProject,
      context: {
        project: proj,
      },
    })
  })
}
