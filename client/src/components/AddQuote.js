import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { createQuote, getAllQuote, getUserById } from "../queries/query";
import { toast } from "react-toastify";
export default function AddQuote() {
  const [addQuote, { data, loading, error }] = useMutation(createQuote, {
    refetchQueries: [getAllQuote, "getAllQuote",getUserById, "getUserById"  ],
  });
  const [quote, setQuote] = useState("");
  const onChangeCredentials = (e) => {
    setQuote(e.target.value);
  };
  const CreateQuote = (e) => {
    e.preventDefault();
    addQuote({ variables: { name: quote } });
    setQuote("");
  };
  useEffect(() => {
    if (data && data.Quote) {
      toast.success("🦄 You have Created Your account", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [data]);

  return (
    <div className="w-[85%] md:w-1/2 ">
      {data && <p className="text-green-700 px-1 ">{data.Quote}</p>}
      <form
        className="space-y-4 md:space-y-6 shadow-lg rounded-lg  p-10 bg-white"
        action="post"
        onSubmit={CreateQuote}
      >
        <div>
          <label
            htmlFor="quote"
            className="block mb-2 text-sm font-medium text-pink-900 dark:text-black"
          >
            Quote
          </label>
          <input
            type="text"
            name="quote"
            id="quote"
            value={quote}
            required
            onChange={onChangeCredentials}
            className="bg-white-50 border border-gray-300 text-pink-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
          />
          {error && <p className="text-red-700 px-1">{error.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full text-white bg-pink-900  hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          {loading ? "Loading" : "Continue"}
        </button>
      </form>
    </div>
  );
}
