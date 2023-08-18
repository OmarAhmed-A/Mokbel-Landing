import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";

function SignUp() {
  const [stname, setStname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [addr, setAddr] = useState("");
  const [submissionResult, setSubmissionResult] = useState("");

  const proxyLink = "https://cors-proxy.omiro755.workers.dev/" //this is a proxy link to bypass CORS error
  const responseLink = `https://docs.google.com/forms/d/e/1FAIpQLScVdT2tvP89h1nGj5V-5XaGrP8JekiZqC6rbQsrMU7ndwvnkw/formResponse?usp=pp_url&entry.2005620554=${stname}&entry.1166974658=${phone}&entry.1045781291=${email}&entry.1065046570=${addr}&submit=Submit`;

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(proxyLink + responseLink);
      console.log(response.status);
      if (response.status===200) {
        setSubmissionResult("success");
        console.log("success");
      } else {
        setSubmissionResult("error");
      }
    } catch (error) {

      console.log(error);
      console.log("error");
      setSubmissionResult("error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Your Header and PageIllustration components */}
      <Header />
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <main>
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">
                  Welcome. We exist to make entrepreneurship easier.
                </h1>
              </div>
            </div>
            <div className="w-full p-6 mb-12 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
              <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                Sign UP
              </h1>
              
              {submissionResult === "error" && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}{submissionResult === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                  Success! Your form has been submitted.
                </div>
              )}
              <form className="mt-6" onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Store name
                  </label>
                  <input
                    type="text"
                    value={stname}
                    onChange={(e) => setStname(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                {/* Similar fields for email, phone, and location */}
                <div className="mb-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Phone Number{" "}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Email{" "}
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Location{" "}
                  </label>
                  <input
                    type="text"
                    value={addr}
                    onChange={(e) => setAddr(e.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                  >
                    Sell with Mokbel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignUp;
