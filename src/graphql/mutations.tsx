import { gql } from "@apollo/client";

export const CREATE_BOOKING_MUTATION = gql`
  mutation createBooking($fullname: String!, $mobile: String!, $arrivalDate: String!, $flight: String!, $airport: String!, $terminal: String) {
    createBooking(fullname: $fullname, mobile: $mobile, arrivalDate: $arrivalDate, flight: $flight, airport: $airport, terminal: $terminal )
  }
`;
