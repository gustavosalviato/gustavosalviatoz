import { ApolloClient, InMemoryCache } from '@apollo/client'
import { graphCmsAPI } from '../constants/graphcms'

export const client = new ApolloClient({
  uri: graphCmsAPI,
  cache: new InMemoryCache(),
})
