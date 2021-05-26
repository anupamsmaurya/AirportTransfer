import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Query {
    allBookings: [Booking!]!
  }
  type Booking {
    id: ID!
    fullname: String!
    mobile: String!
    arrivalDate: String!
    flight: String!
    airport: String!
    terminal: String
  }
`;
