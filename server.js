import {ApolloServer  } from "apollo-server"
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'

import typeDefs from './schemaGql.js'
import mongoose from "mongoose"
import { JWT_SECRET, MONGOURI } from "./config.js"
//server

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on("connected",()=>{
    console.log('conencted to mongodb')
})
mongoose.connection.on("error",(err)=>{
    console.log('eror while connecting to mongodb', err)
})
//modals
import './modals/Quotes.js'
import './modals/User.js'

import resolvers from './resolvers.js'
import { context } from "./midleware/context.js"

const server = new ApolloServer({
    //typeDefs:variable name of schema here
    typeDefs,
     //resolvers:query ko answer send krna wala object here
    resolvers,
    //add midleware
    context:context,
    //to test or run apis
    plugins:[
     ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})
server.listen().then(({url})=>{
    console.log(`server ready at ${url}`)
})
//mongodb+srv://aartijakhar:aarti2005@cluster0.6qxaf8t.mongodb.net/?retryWrites=true&w=majority