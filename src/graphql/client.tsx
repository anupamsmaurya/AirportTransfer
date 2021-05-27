import { ApolloClient, InMemoryCache } from '@apollo/client';
import { typeDefs } from './types';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  typeDefs
});
