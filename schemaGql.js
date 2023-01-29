//schema
import {gql} from "apollo-server"
const typeDefs=gql`
 type Query{
    users:[User]
    user:User
    quotes:[QuotesWithName]
    quote(by:ID):[Quote]
    
}
type QuotesWithName{
    name:String
    by:IdWithName
}
type IdWithName{
    _id:String
    firstName:String
}
type User{
    _id:ID! 
    firstName:String
    lastName:String
    email:String
    password:String
    quotes:[Quote]
}
type Quote{
    name:String
    by:ID
}
type Mutation{
   signup(userNew:UserInput!):User
   signin(user:MyuserInput!):Token
   createQuote(name:String!):String
   getMyQuote:[Quote]
}
type Token{
    token:String
    user:User
}
input UserInput{
    firstName:String!
    lastName:String!
    email:String!
    password:String!
}
input MyuserInput{
  email:String!
  password:String!
}
    `
    //  ID! -->! sign for required:true 
    export default typeDefs