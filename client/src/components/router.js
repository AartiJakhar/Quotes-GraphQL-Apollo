import Profile from "./Profile";
import Quotes from "./Quotes";
import Signin from "./Signin";
import Signup from "./Signup";


export const routes  =[
    {path:"/signin",element:<Signin/>},
    {path:"/home",element:<Signin/>},
    {path:"/signup",element:<Signup/>},
    {path:"/profile",element:<Profile/>},
    {path:"/quotes",element:<Quotes/>},
]