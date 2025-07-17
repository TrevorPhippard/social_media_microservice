import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include', // Required if credentials used
  }),
  cache: new InMemoryCache(),
})
