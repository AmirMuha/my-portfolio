import { gql } from "@apollo/client"

// ##################################
// ############### Create Mutations
// ##################################
export const LoginMutation = gql`
  mutation Login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
    }
  }
`
export const LogoutMutation = gql`
  mutation Logout {
    logout
  }
`
export const SubmitAdminMutation = gql`
  mutation SubmitAdmin(
    $email: String!
    $password: String!
    $fname: String!
    $lname: String!
    $linkedIn: String!
    $whatsapp: String!
    $instagram: String!
    $github: String!
    $heroImage: String!
    $resumes: [String!]!
  ) {
    createAdmin(
      data: {
        email: $email
        password: $password
        fname: $fname
        lname: $lname
        linkedIn: $linkedIn
        whatsapp: $whatsapp
        instagram: $instagram
        github: $github
        heroImage: $heroImage
        resumes: { set: $resumes }
      }
    ) {
      id
      email
      fname
      lname
      resumes
    }
  }
`
export const UploadSingleFileMutation = gql`
  mutation UploadFile($file: Upload!) {
    uploadSingleFile(file: $file)
  }
`
export const UploadMultipleFileMutation = gql`
  mutation UploadFiles($files: [Upload!]!) {
    uploadMultipleFiles(files: $files)
  }
`
export const CreateStackMutation = gql`
  mutation CreateStack($id: String!, $image: String!) {
    updateAdmin(data: { stack: { push: $image } }, where: { id: $id })
  }
`
export const CreateProjectMutation = gql`
  mutation CreateProject(
    $for: String
    $name: String!
    $image: String!
    $type: String!
    $github_url: String!
    $app_url: String!
    $summary: String!
  ) {
    createProject(
      data: {
        name: $name
        image: $image
        type: $type
        github_url: $github_url
        app_url: $app_url
        summary: $summary
        admin: { connect: { email: $for } }
      }
    ) {
      id
      name
      image
      type
      github_url
      app_url
      summary
    }
  }
`
// export const CreateMessageMutation = gql``
export const CreateSketchMutation = gql`
  mutation CreateSketch(
    $projectId: String!
    $summary: String!
    $description: String!
    $download_link: String!
    $image: String!
    $title: String!
  ) {
    createSketch(
      data: {
        title: $title
        description: $description
        summary: $summary
        download_link: $download_link
        image: $image
        project: { connect: { id: $projectId } }
      }
    ) {
      id
      title
      summary
      description
      download_link
      image
      project_id
    }
  }
`
export const CreateTechCategoryMutation = gql`
  mutation CreateTechCategory($name: String!, $projectId: String!) {
    createTechCategory(
      data: { name: $name, project: { connect: { id: $projectId } } }
    ) {
      id
      name
    }
  }
`
export const CreateTechMutation = gql`
  mutation CreateTech($name: String!, $techCategoryId: String!) {
    createTech(
      data: {
        name: $name
        tech_categories: { connect: { id: $techCategoryId } }
      }
    ) {
      id
      name
    }
  }
`
// export const CreateAboutMutation = gql``
export const CreateQuestionMutation = gql`
  mutation CreateQuestion(
    $question: String!
    $answer: String!
    $projectId: String!
  ) {
    createQuestion(
      data: {
        question: $question
        project: { connect: { id: $projectId } }
        answer: { create: { answer: $answer } }
      }
    ) {
      id
      question
      answer {
        id
        answer
      }
    }
  }
`
// // ##################################
// // ############### Update Mutations
// // ##################################

export const UpdateProjectSummaryMutation = gql`
  mutation UpdateProjectSummary($id: String!, $summary: String) {
    updateProject(data: { summary: { set: $summary } }, where: { id: $id }) {
      summary
    }
  }
`
export const UpdateProjectTypeMutation = gql`
  mutation UpdateProjectType($id: String!, $type: String) {
    updateProject(data: { type: { set: $type } }, where: { id: $id }) {
      type
    }
  }
`
export const UpdateImageMutation = gql`
  mutation UpdateImage(
    $file: Upload!
    $id: String!
    $prevname: String!
    $field: String
  ) {
    updateImage(file: $file, id: $id, prevname: $prevname, field: $field)
  }
`
export const UpdateProjectAppUrlMutation = gql`
  mutation UpdateProjectAppUrl($id: String!, $app_url: String) {
    updateProject(data: { app_url: { set: $app_url } }, where: { id: $id }) {
      app_url
    }
  }
`
export const UpdateProjectgithub_urlMutation = gql`
  mutation UpdateProjectGitHubUrl($id: String!, $github_url: String) {
    updateProject(
      data: { github_url: { set: $github_url } }
      where: { id: $id }
    ) {
      github_url
    }
  }
`
export const UpdateProjectNameMutation = gql`
  mutation UpdateProjectName($id: String!, $name: String) {
    updateProject(data: { name: { set: $name } }, where: { id: $id }) {
      name
    }
  }
`
// export const UpdateMessageMutation = gql``
export const UpdateDescriptionSketchMutation = gql`
  mutation UpdateSketchDescription($id: String!, $description: String!) {
    updateSketch(
      data: { description: { set: $description } }
      where: { id: $id }
    ) {
      id
      title
      description
      summary
      image
      download_link
    }
  }
`
export const UpdateImageSketchMutation = gql`
  mutation UpdateSketchImage($id: String!, $image: String!) {
    updateSketch(data: { image: { set: $image } }, where: { id: $id }) {
      id
      title
      description
      summary
      image
      download_link
    }
  }
`
export const UpdateDownloadLinkSketchMutation = gql`
  mutation UpdateSketchDownloadLink($id: String!, $download_link: String!) {
    updateSketch(
      data: { download_link: { set: $download_link } }
      where: { id: $id }
    ) {
      id
      title
      description
      summary
      image
      download_link
    }
  }
`
export const UpdateSummarySketchMutation = gql`
  mutation UpdateSketchSummary($id: String!, $summary: String!) {
    updateSketch(data: { summary: { set: $summary } }, where: { id: $id }) {
      id
      title
      description
      summary
      image
      download_link
    }
  }
`
export const UpdateTechCategoryMutation = gql`
  mutation UpdateTechCategory($name: String!, $techCategoryId: String!) {
    updateTechCategory(
      data: { name: { set: $name } }
      where: { id: $techCategoryId }
    ) {
      id
      name
      techs {
        id
        name
      }
    }
  }
`
// export const UpdateTechMutation = gql`
//   mutation UpdateTech($name: String!, $techId: String!) {
//     updateTech(data: { name: { set: $name } }, where: { id: $techId }) {
//       id
//       name
//       tech_category_id
//     }
//   }
// `
// export const UpdateAboutMutation = gql``
export const UpdateQuestionMutation = gql`
  mutation UpdateQuestion($id: String!, $question: String!, $answer: String!) {
    updateQuestion(
      data: {
        question: { set: $question }
        answer: { update: { answer: { set: $answer } } }
      }
      where: { id: $id }
    ) {
      id
      question
      answer {
        id
        answer
      }
    }
  }
`
// export const UpdateAnswerMutation = gql``
// // ##################################
// // ############### Delete Mutations
// // ##################################
export const DeleteStackMutation = gql`
  mutation UpdateStack($id: String!, $images: String!) {
    updateAdmin(data: { stack: { set: $images } }, where: { id: $id })
  }
`
export const DeleteProjectMutation = gql`
  mutation DeleteProject($id: String!) {
    deleteProject(where: { id: $id }) {
      id
    }
  }
`
// export const DeleteMessageMutation = gql``
export const DeleteSketchMutation = gql`
  mutation DeleteSketch($id: String!) {
    deleteSketch(where: { id: $id }) {
      id
    }
  }
`
export const DeleteTechCategoryMutation = gql`
  mutation DeleteTechCategory($id: String!) {
    deleteTechCategory(where: { id: $id }) {
      id
    }
  }
`
export const DeleteTechMutation = gql`
  mutation DeleteTech($id: String!) {
    deleteTech(where: { id: $id }) {
      id
    }
  }
`
// export const DeleteAboutMutation = gql``
export const DeleteQuestionMutation = gql`
  mutation DeleteQuestion($id: String!) {
    deleteQuestion(where: { id: $id }) {
      id
    }
  }
`
