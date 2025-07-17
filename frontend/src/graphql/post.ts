import { gql } from '@apollo/client/core'

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      title
      content
      authorId
    }
  }
`

export const POST_MUTATION = gql`
  mutation Post($title: String!, $content: String!, $authorId: String!) {
    createPost(title: $title, content: $content, authorId: $authorId) {
      title
      content
      authorId
    }
  }
`
