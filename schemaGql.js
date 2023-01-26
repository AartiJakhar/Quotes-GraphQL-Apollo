//schema
import {gql} from "apollo-server"
const typeDefs=gql`
 type Query{
    users:[User]
    user(id:ID!):User
    quotes:[Quote]
    quote(by:ID):[Quote]
    
}
type User{
    id:ID! 
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
}
input UserInput{
    firstName:String!
    lastName:String!
    email:String!
    password:String!
}
    `
    //  ID! -->! sign for required:true 
    export default typeDefs