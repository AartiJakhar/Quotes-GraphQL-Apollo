import React , {useState} from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Signup() {
    const [credentials, setCredentials] = useState({})
    const [error, setError] = useState("")
    const onChangeCredentials=(e)=>{
          setCredentials({...credentials,[e.target.name]:e.target.value})
         
    }

    const signUp=async(e)=>{
             e.preventDefault()
             console.log(credentials)
            // let data = await fetch(`${process.env.authUrl}/api/signup`,{
            //     method: 'POST',
            //     headers: {
            //       'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
            //   })
            //   const res= await data.json()
            const res={success:true,error:""}
              if(res.success){
                  localStorage.setItem('token',res.authtoken)
                  localStorage.setItem('email',res.email)
                  setCredentials({name:"",email:"",password:""})
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
                 setError("")
                  setTimeout(() => {
                    //   router.push(`${nextauthUrl}`)
                  }, 2000);
              }else{
         setError(res.error)
              }
     
       
    }
  return (
    <section className="bg-white-50 dark:bg-white-900 ">
    {/* our toastify component */}
    <ToastContainer/>
<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
    <h2 href="#" className="text-center mb-6 text-2xl font-semibold text-pink-900 dark:text-black pt-20">
     
    Sticky Notes
    </h2>
  
    <div className="w-full bg-white shadow-lg rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-800 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-pink-900 md:text-2xl dark:text-black">
                Sign up to your account 
            </h1>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={signUp}>
                <div>
                    <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-pink-900 dark:text-black">Your name</label>
                    <input type="text"  minLength={4} required name="firstname" id="firstname" onChange={onChangeCredentials} className="bg-white-50 border border-gray-300 text-pink-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" />
                </div>
                <div>
                    <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-pink-900 dark:text-black">Your last Name</label>
                    <input type="text"  minLength={4} required name="lastname" id="lastname" onChange={onChangeCredentials} className="bg-white-50 border border-gray-300 text-pink-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-pink-900 dark:text-black">Your email</label>
                    <input type="email"   name="email" id="email" required onChange={onChangeCredentials} className="bg-white-50 border border-gray-300 text-pink-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                    {error!=="" && <p className='text-red-700 px-1'>{error}</p>}
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-pink-900 dark:text-black">Password</label>
                    <input type="password" minLength={6}  required name="password" id="password" onChange={onChangeCredentials} placeholder="••••••••" className="bg-white-50 border border-gray-300 text-pink-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <button type="submit" className="w-full text-white bg-pink-900  hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Continue</button>
              
            </form>
            <p className="text-sm font-light text-pink-900 dark:text-pink-800">
                 have an account already? <Link to={'/signin'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
              </p>
        </div>
    </div>
</div>
</section>
  )
}
