import React  from 'react'
import { useQuery } from '@apollo/client';
import { getAllQuote } from '../queries/query';
export default function Quotes() {

 
const { loading, error, data } = useQuery(getAllQuote);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="p-3 md:px-10 px-10 bg-gray-100">
    <div className="my-5 py-10   mx-auto    flex max-md:flex-col flex-row flex-wrap justify-around ">
        {data.quotes.map(({name,by})=>{
          return(
          <blockquote key={Math.random()} className="block rounded-xl lg:w-[40%] md:w-[50%] mx-10 py-7 hover:scale-110 transition-transform shadow-lg bg-white p-4 m-4 text-gray-800">
              <h6>"{name}"</h6>
              <h3 className="text-xl text-gray-900 px-2 text-right"> - {by.firstName}</h3>
          </blockquote>)
        })}
   
    </div>
  </div>
  )
}
