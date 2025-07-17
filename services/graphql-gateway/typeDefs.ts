const typeDefs = `#graphql
  type Post {
    title: String
    content: String
    authorId: String
  }

  type Mutation {
    createPost(title: String!, content: String!, authorId: String!): Post
  }

  type Query {
    posts: [Post!]!
    hello: String
  }
`;

export default typeDefs;
