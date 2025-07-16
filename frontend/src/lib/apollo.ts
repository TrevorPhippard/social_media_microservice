import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'

const postGraphQLEndpoint = 'http://localhost/post/graphql/'
const userGraphQLEndpoint = 'http://localhost/user/graphql/'
const feedGraphQLEndpoint = 'http://localhost/feed/graphql/'

const httpLink = new HttpLink({
  uri: userGraphQLEndpoint,
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

export const apolloClient = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
})
