import React, {  useState } from "react";
import { FaBars, FaTimes,FaUser } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { BiUserPlus } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const navigate=useNavigate()
    const links = [
        {
            id: 1,
            link: "/",
            name:"Home"
        },
        {
            id: 4,
            link: "/quotes",
            name:"Quotes"
        }
    ]
 const logOut=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate("/")
 }

    return (
        <div className="flex justify-between  items-center w-full h-20    bg-white   px-4  shadow-white shadow-2xl ">
            <div>
                <h1 className="text-pink-600 font-bold text-3xl cursor-pointer">Stick Notes</h1>
            </div>

            <ul className="flex">
                <div className=" md:flex hidden mt-4 mr-5 ">
                    {links.map(({ id, link,name }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize  text-xl text-pink-600 hover:scale-105 hover:text-black duration-200"
                        >
                            <Link to={link}  duration={500}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </div>
               {!localStorage.getItem('token')?<div className="mr-4   md:flex hidden  mt-3 text-pink-600  space-x-4">
                  
                    <Link to={'/signup'} className='hover:text-black flex mb-3 border-solid border-2  rounded-xl hover:bg-white bg-gray-200 pl-2 pr-2 pt-1 '>SignUp <BiUserPlus className=' mx-1 text-3xl' /></Link>
                    <Link to={'/signin'} className='hover:text-black flex mb-3 border-solid border-2  rounded-xl hover:bg-white bg-gray-200 pl-2 pr-2 pt-1 '>Login <FiLogIn className=' mx-1 text-2xl' /></Link>
                   
                </div>:
                 <div className="mr-4   md:flex hidden  mt-3 text-pink-600  space-x-4">
                     <button  className='hover:text-pink-900 text-xl flex mb-3 items-center  pl-2 pr-2 pt-1  hover:scale-105' onClick={logOut}> Logout </button>
                     <Link to={'/profile'} className='hover:text-black flex mb-3   pl-2 pr-2 pt-1 '> <FaUser className=' mx-1 text-2xl' /></Link>
                     
                    </div>}
            </ul>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer  pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} className="text-white " /> : <FaBars size={30} className="text-pink-600" />}
            </div>

            {nav && (
                <ul className="flex flex-col absolute top-0 left-0  w-full  h-92   bg-pink-600 rounded-br-3xl rounded-bl-3xl  text-white ">
                    <div>
                        {links.map(({ id, link,name }) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer hover:text-black  capitalize py-2 text-3xl   "
                            >
                                <Link
                                    onClick={() => setNav(!nav)}
                                    to={link}
                                    
                                    duration={500}
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </div>
                {!localStorage.getItem('token')?    <div className="ml-3  flex  mt-3 text-pink-600  space-x-4">
                        
                        <Link to={'/signup'} className='hover:text-black flex mb-3 border-solid  border-pink-600 rounded-xl hover:bg-white bg-slate-200 pl-2 pr-2 pt-1 '>SignUp <BiUserPlus className=' mx-1 text-3xl' /></Link>
                        <Link to={'/signin'} className='hover:text-black flex mb-3 border-solid  border-pink-600 rounded-xl hover:bg-white bg-slate-200 pl-2 pr-2 pt-1 '>Login <FiLogIn className=' mx-1 text-3xl' /></Link>
                    </div>:
                    <div className="ml-3  flex   mt-3 text-3xl text-white space-x-4">
                     <button  className='hover:text-pink-900 text-xl flex mb-3 items-center  pl-2 pr-2 pt-1  hover:scale-105 ' onClick={()=>{localStorage.removeItem('token');localStorage.removeItem('email')}}> Logout </button>
                     <Link to={'/profile'} className='hover:text-white flex mb-3 items-center  pl-2 pr-2 pt-1 '> Profile <FaUser className=' mx-1 text-white text-2xl' /></Link>
                    </div>}
                </ul>
            )}
        </div>
    );
}
export default Navbar