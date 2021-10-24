import { CreatePagesArgs, CreateWebpackConfigArgs } from "gatsby"
import path from "path"

interface ProjectQuery {
  portfolio: {
    projects: GatsbyTypes.Portfolio_Project[]
  }
}
export const onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    devtool: "eval-source-map",
  })
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
  const getImageName = (n: string) => {
    const imgExtRegex = /\.(png|jpg|webp|svg|jpeg)$/gi
    if (!imgExtRegex.test(n)) {
      return n
    }
    return n.split(imgExtRegex)[0]
  }
  results.data?.portfolio.projects.forEach(async proj => {
    createPage({
      path: `/projects/${proj.id}`,
      component: ProjectTemplate,
      context: {
        project: proj,
        image: getImageName(proj.image),
      },
    })
  })
  results.data?.portfolio.projects.forEach(async proj => {
    createPage({
      path: `/dashboard/projects/${proj.id}`,
      component: EditableProject,
      context: {
        project: proj,
      },
    })
  })
}
