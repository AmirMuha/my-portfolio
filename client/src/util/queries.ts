import { gql } from "@apollo/client"

export const IsThereAdminQuery = gql`
  query IsThereAdminQuery {
    isThereAnAdmin
  }
`

export const QuerySingleProjectWithRelations = gql`
  query QuerySingleProject($id: String!) {
    project(where: { id: $id }) {
      id
      name
      app_url
      github_url
      image
      type
      summary
      questions {
        id
        question
        answer
      }
      sketches {
        id
        title
        description
        summary
        download_link
        image
      }
      tech_categories {
        id
        name
        techs {
          id
          name
        }
      }
    }
  }
`
export const QueryProjectsWithRelations = gql`
  query QueryAllProjects {
    projects {
      id
      name
      app_url
      github_url
      image
      type
      summary
      questions {
        id
        question
        answer {
          id
          answer
        }
      }
      sketches {
        id
        title
        description
        summary
        download_link
        image
      }
      tech_categories {
        id
        name
        techs {
          id
          name
        }
      }
    }
  }
`
export const QueryProjectsWithTechCategories = gql`
  query {
    projects {
      app_url
      github_url
      id
      image
      name
      summary
      type
      tech_categories {
        name
        id
        techs {
          name
          id
        }
      }
    }
  }
`
export const QueryProjectsWithoutRelations = gql`
  query {
    projects {
      app_url
      github_url
      id
      image
      name
      summary
      type
    }
  }
`
export const QueryMessages = gql`
  query {
    messages {
      answer_status
      answeredAt
      body
      createdAd
      from
      id
      read_status
      subject
    }
  }
`
