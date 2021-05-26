import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';
import { CREATE_BOOKING_MUTATION } from './mutations';
import { typeDefs } from './types';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  typeDefs
});
