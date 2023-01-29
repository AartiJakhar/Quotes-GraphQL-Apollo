import Home from "./Home";
import Profile from "./Profile";
import Quotes from "./Quotes";
import Signin from "./Signin";
import Signup from "./Signup";


export const routes  =[
    {path:"/signin",element:<Signin/>},
    {path:"/",element:<Home/>},
    {path:"/signup",element:<Signup/>},
    {path:"/profile",element:<Profile/>},
    {path:"/quotes",element:<Quotes/>},
]