const typeDefs = `#graphql
  type Post {
    title:    String
    content:  String
    authorId: String
  }

  type Profile {
    id:        Int
    userId:    Int
    bio:       String
    avatarUrl: String
    createdAt: String
    updatedAt: String
    followers: Follower
    following: Follower
  }

  type Follower {
    id:          Int
    followerId:  Int
    followingId: Int
    follower:    Profile
    following:   Profile
  }

  type Mutation {
    createPost(title: String!, content: String!, authorId: String!): Post
    followUser( userId: String! targetId: String!): String
    unfollowUser( userId: String! targetId: String!): String
  }

  type Query {
    posts: [Post!]!
    profile(userId: String!): Profile
    profiles: [Profile!]!
    followers: [Follower!]!
  }
`;

export default typeDefs;
