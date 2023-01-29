import React  from 'react'
import { useQuery } from '@apollo/client';
import { getAllQuote } from '../queries/query';
export default function Quotes() {

 
const { loading, error, data } = useQuery(getAllQuote);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="p-3 md:px-10 px-10 bg-gray-100">
    <div className="my-10 shadow-lg bg-white py-10   rounded-lg flex md:flex-row flex-row flex-wrap justify-around ">
        {data.quotes.map(({name,by})=>{
          return(
          <blockquote key={Math.random()} className="block mx-10 py-2  text-gray-800">
              <h6>"{name}"</h6>
              <h3 className="text-xl text-gray-900 px-2"> - {by.firstName}</h3>
          </blockquote>)
        })}
   
    </div>
  </div>
  )
}
