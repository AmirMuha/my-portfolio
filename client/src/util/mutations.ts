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
// export const CreateSketchMutation = gql``
// export const CreateTechCategoryMutation = gql``
// export const CreateTechMutation = gql``
// export const CreateAboutMutation = gql``
// export const CreateQuestionMutation = gql``
// export const CreateAnswerMutation = gql``
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
export const UpdateProjectImageMutation = gql`
  mutation UpdateProjectImage(
    $file: Upload!
    $projectId: String!
    $prevname: String!
  ) {
    updateImage(file: $file, projectId: $projectId, prevname: $prevname)
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
// export const UpdateSketchMutation = gql``
// export const UpdateTechCategoryMutation = gql``
// export const UpdateTechMutation = gql``
// export const UpdateAboutMutation = gql``
// export const UpdateQuestionMutation = gql``
// export const UpdateAnswerMutation = gql``
// // ##################################
// // ############### Delete Mutations
// // ##################################
export const DeleteProjectMutation = gql`
  mutation DeleteProject($id: String!) {
    deleteProject(where: { id: $id }) {
      id
    }
  }
`
// export const DeleteMessageMutation = gql``
// export const DeleteSketchMutation = gql``
// export const DeleteTechCategoryMutation = gql``
// export const DeleteTechMutation = gql``
// export const DeleteAboutMutation = gql``
// export const DeleteQuestionMutation = gql``
// export const DeleteAnswerMutation = gql``
