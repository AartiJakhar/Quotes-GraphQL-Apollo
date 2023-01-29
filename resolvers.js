// ho query ko lega or response send krega
import bcrypt from 'bcryptjs'
import mongoose, { Query } from "mongoose";
import jwt  from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";
const User = mongoose.model("User")
const Quote = mongoose.model("Quote")

const resolvers = {
  Query: {
    users: async() => {
      const allUsers = await User.find()
      return allUsers
    },
    quotes: async() => await Quote.find().populate("by","_id firstName" ),
    user: async(_, args,{userId}) => {
      if(!userId){
        throw new Error("You must be logged in")
   }
      const user = await  User.findOne({_id:userId})
   return user
    },
    quote:async (_, ar,{userId}) => {
      if(!userId){
        throw new Error("You must be logged in")
   }
      return await Quote.find({by:ar.by})},
  },
  Mutation: {
    signup: async(_, { userNew }) => {
      const { email, password}=userNew
     const user = await User.findOne({email:email})

      if(user){
        throw new Error("User With this email already exists")
      }
        let hashedPassword= await  bcrypt.hash(password,10)
       const newUser = new User({
        ...userNew,
        password:hashedPassword
       })
      return await newUser.save()
    },
    signin:async(_,{user})=>{
      const {email,password}=user;
      const Myuser = await User.findOne({email:email})

      if(!Myuser){
        throw new Error("User With this email Do Not  exists")
      }
      const doMatch = await bcrypt.compare(password,Myuser.password)
      if(!doMatch){
        throw new Error("invalid credentials, Please try again with valid credentials ")
      }
      const token = jwt.sign({userId:Myuser._id},JWT_SECRET)
      return  {token,user:Myuser}
     
    

},
    createQuote:async(_,{name},{userId})=>{
      //check if user loged in 
      if(!userId){
           throw new Error("You must be logged in")
      }
      const newquote = new Quote({
        name,
        by:userId
      })
      await newquote.save()
      return "Quote saved successfully"
    },
},
Token:{
  user:async(token)=>{
    return token.user
  }
},
  User: {
    quotes: async(user,_,{userId}) =>{ 
       //check if user loged in 
       if(!userId){
        throw new Error("You must be logged in")
   }
      return await Quote.find({by:user.id})},
  },
  //yani user wale schema me query krne koi lge or ye query kre yani ye mangle to aqq use quotes ko filter kreke de skt ho
};
export default resolvers;
