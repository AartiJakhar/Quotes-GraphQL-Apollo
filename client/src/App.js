import React from 'react'
import './App.css'
import {routes} from './components/router'
import {
  useRoutes
} from "react-router-dom";
import Navbar from './components/Navbar';
function App() {
  const element = useRoutes(routes)
  return (
    <>
      <Navbar/>
      <div className='bg-gray-100'>
     
     {element}

      </div>
    </>
  )
}

export default App