import React from 'react'
import './App.css'
import {routes} from './components/router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useRoutes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  const element = useRoutes(routes)
  return (
    <>
      <Navbar/>
      <ToastContainer/>
      <div className='bg-gray-100'>
     
     {element}

      </div>
      <Footer/>
    </>
  )
}

export default App