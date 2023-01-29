import React ,{useEffect, useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from '@apollo/client';
import { login } from '../queries/query';
export default function Signin() {
    const navigate=useNavigate()
      const [addTodo, { data, loading, error }] = useMutation(login);
    const [credentials, setCredentials] = useState({})
    const onChangeCredentials=(e)=>{
          setCredentials({...credentials,[e.target.name]:e.target.value})
         
    }
    
    const signUp=async(e)=>{
             e.preventDefault()
              addTodo({ variables: { user: credentials } });
              
            }
            useEffect(() => {
            if(data&&!error&& !loading){
                localStorage.setItem('token',data.user.token)
                localStorage.setItem('email',data.user.user.email)
                toast.success('🦄 You have Created Your account', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
              
                setTimeout(() => {
                  navigate("/quotes")
              }, 2000);
              setCredentials({})
          }
     
        }, [data])
   
  return (
    <section className="bg-white-50 dark:bg-white-900">
    {/* our toastify component */}
    <ToastContainer/>
<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <h2  className="flex items-center mb-6 text-2xl font-semibold text-pink-900 dark:text-black ">
      
        Sticky Notes
    </h2>
  
    <div className="w-full bg-white rounded-lg shadow-lg  md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-800 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-pink-900 md:text-2xl dark:text-black">
                Sign In to your account 
            </h1>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={signUp}>
               
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-pink-900 dark:text-black">Your email</label>
                    <input type="email"   name="email" id="email" required onChange={onChangeCredentials} className="bg-white-50 border border-gray-300 text-pink-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                  
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-pink-900 dark:text-black">Password</label>
                    <input type="password" minLength={6}  required name="password" id="password" onChange={onChangeCredentials} placeholder="••••••••" className="bg-white-50 border border-gray-300 text-pink-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                {error && <p className='text-red-700 px-1'>{error.message}</p>}
                <button type="submit" className="w-full text-white bg-pink-900  hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{!loading?"Continue":"Loading"}</button>
              
            </form>
            <p className="text-sm font-light text-pink-900 dark:text-pink-800">
                 have an account already?
                  <Link to={'/signup'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up</Link>
              </p>
        </div>
    </div>
</div>
</section>
  )
}
