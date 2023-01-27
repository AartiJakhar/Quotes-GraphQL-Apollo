
import {  gql } from '@apollo/client';
export const getAllQuote = gql`
query getAllQuote{
  quotes{
   name
   by{
    firstName
    _id
  }
  }
}
`;
export const getAllUsers = gql`
query getAllUsers{
    users{
      _id
      firstName
      email
      lastName
    }
  }
`;