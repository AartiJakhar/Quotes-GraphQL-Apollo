import {ApolloServer,gql} from "apollo-server"
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import {users,quotes} from './fakedb.js'
//schema
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
     quotes:[Quote]
    }
    type Quote{
        name:String
        by:ID
    }
    `
    //  ID! -->! sign for required:true 
// ho query ko lega or response send krega 
const resolvers={
    Query:{
        users:()=> {return users},
        quotes:()=> quotes,
        user:(parentundifenid,args)=>users.find(user=>user.id==args.id),
        quote:(parentundifenid,ar)=>quotes.filter(quote=>quote.by==ar.by),
    },
    User:{
        quotes:(user)=> quotes.filter(quote=>quote.by==user.id)
    },
    //yani user wale schema me query krne koi lge or ye query kre yani ye mangle to aqq use quotes ko filter kreke de skt ho 

}

//server
const server = new ApolloServer({
    //typeDefs:variable name of schema here
    typeDefs,
     //resolvers:query ko answer send krna wala object here
    resolvers,
    //to test or run apis
    plugins:[
     ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})
server.listen().then(({url})=>{
    console.log(`server ready at ${url}`)
})