import  jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config.js"
export const context = ({req})=>{
    const {authtoken}=req.headers;
    if(authtoken){
        const {userId}=jwt.verify(authtoken,JWT_SECRET)
        return {userId}
    }
}