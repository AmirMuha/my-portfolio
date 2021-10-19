import { gql } from "@apollo/client"

export const QueryProjectsWithRelations = gql`
  query {
    projects {
      app_url
      github_url
      id
      image
      name
      summary
      type
      sketch {
        id
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
