import React, { useEffect, useState } from 'react'
import './App.css'
import {routes} from './components/router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useRoutes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
function App() {
  const [token, setToken] = useState("")
  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
    headers:{
      "authtoken":token || ""
    }
  });
  useEffect(() => {
    setToken(localStorage.getItem('token'))
   console.log(localStorage.getItem('token'))
  }, [localStorage.getItem('token') ])
  const element = useRoutes(routes)
  return (
      <ApolloProvider client={client}>
      <Navbar/>
      <ToastContainer/>
      <div className='bg-gray-100'>
     
     {element}

      </div>
      <Footer/>
 
    </ApolloProvider>
  )
}

export default App