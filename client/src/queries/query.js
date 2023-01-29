
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
export const getUserById = gql`
query getUserById{
  user{
    firstName
    lastName
    email
    quotes{
      name
    }
  }
}
`;

export const login = gql`
mutation login($user:MyuserInput!){
  user:signin(user:$user){
   token
    user{
    email
    }
    }
  }
`;

export const createuser = gql`
mutation createuser($userNew:UserInput!){
  user:signup(userNew:$userNew){
      firstName
      lastName
    }
  }
`;

export const createQuote = gql`
mutation createQuote($name:String!){
  Quote:createQuote(name:$name)
  }
`;
