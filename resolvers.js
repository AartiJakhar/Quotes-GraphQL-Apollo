import { users, quotes } from "./fakedb.js";
// ho query ko lega or response send krega
import bcrypt from 'bcryptjs'
import mongoose from "mongoose";
import jwt  from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";
const User = mongoose.model("User")

const resolvers = {
  Query: {
    users: async() => {
      const allUsers = await User.find()
      return allUsers
    },
    quotes: () => quotes,
    user: (_, args) => users.find((user) => user.id == args.id),
    quote: (_, ar) => quotes.filter((quote) => quote.by == ar.by),
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
},
Token:{
  user:async(token)=>{
    return token.user
  }
},
  User: {
    quotes: (user) => quotes.filter((quote) => quote.by == user.id),
  },
  //yani user wale schema me query krne koi lge or ye query kre yani ye mangle to aqq use quotes ko filter kreke de skt ho
};
export default resolvers;
