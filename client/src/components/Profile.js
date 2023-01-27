import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
export default function Profile() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    pincode: "",
    password: "",
    newpassword: "",
    cpassword: "",
  });
  return (
    <div className="p-3 md:px-10 px-10 bg-gray-100">
      <h1 className="font-bold text-3xl my-8 text-center">Profile</h1>
      <div className="my-10 shadow-lg bg-white py-10  rounded-lg flex md:flex-row flex-col flex-wrap">
        <div className="flex justify-center flex-col md:w-1/3 items-center md:border-r-2 border-solid border-gray-300">
          <img
            src={`https://robohash.org/${credentials.name}.png`}
            alt="pic"
          ></img>
          <h3 className="text-3xl bold space-x-2 leading-10 py-3 text-gray-800">
            {credentials.name}
          </h3>
        </div>
        <div className="px-4 md:w-[66.33%] w-full">
          <div className="border-b-[3px] border-double border-gray-300  h-1/2">
            <h4 className="text-gray-700 text-2xl leading-10">Name </h4>
            <p className="text-gray-800 text-4xl md:pb-0 sm:pb-6">
              {credentials.address ? credentials.address : " _ _"}
            </p>
          </div>
          <div>
            <h4 className="text-gray-700 text-2xl leading-10">Email </h4>
            <p className="text-gray-800 text-4xl">
              {credentials.address ? credentials.address : " _ _"}
            </p>
          </div>
        </div>
      </div>
      <div className="my-10 shadow-lg bg-white py-10   rounded-lg flex md:flex-row flex-row flex-wrap justify-between ">
            <blockquote className="block mx-10 py-2  text-gray-800">
                <h6>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, rem."</h6>
                <h3 className="text-xl text-gray-900 px-2"> - Ramketu</h3>
            </blockquote>
            <blockquote className="block py-2  mx-10 text-gray-800">
                <h6>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, rem."</h6>
                <h3 className="text-xl text-gray-900 px-2"> - Ramketu</h3>
            </blockquote>
            <blockquote className="block py-2 mx-10 text-gray-800">
                <h6>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, rem."</h6>
                <h3 className="text-xl text-gray-900 px-2"> - Ramketu</h3>
            </blockquote>
     
      </div>
    </div>
  );
}
