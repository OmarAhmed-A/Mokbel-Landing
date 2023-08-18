import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";

function SignUp() {
    const [stname, setStname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [addr, setAddr] = useState("");

    const formLink = "https://docs.google.com/forms/d/e/1FAIpQLScVdT2tvP89h1nGj5V-5XaGrP8JekiZqC6rbQsrMU7ndwvnkw/viewform?embedded=true";
    const responseLink = `https://docs.google.com/forms/d/e/1FAIpQLScVdT2tvP89h1nGj5V-5XaGrP8JekiZqC6rbQsrMU7ndwvnkw/formResponse?usp=pp_url&entry.2005620554=${stname}&entry.1166974658=${phone}&entry.1045781291=${email}&entry.1065046570=${addr}&submit=Submit`;

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform additional logic here before submitting the form
        window.location.href = responseLink;
    };

    return (
        <div>
            {/* Your Header and PageIllustration components */}
            <Header />
            <div
                className="relative max-w-6xl mx-auto h-0 pointer-events-none"
                aria-hidden="true"
            >
                <PageIllustration />
            </div>

            <main>
                <section className="py-20 bg-white">
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
