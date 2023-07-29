import React from "react";
import { Link } from "react-router-dom";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Banner from "../partials/Banner";
const formLink = "https://docs.google.com/forms/d/e/1FAIpQLScVdT2tvP89h1nGj5V-5XaGrP8JekiZqC6rbQsrMU7ndwvnkw/viewform?embedded=true"
function SignUp() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">
                  Welcome. We exist to make entrepreneurship easier.
                </h1>
              </div>
              <div class="flex">
                <iframe
                  src={formLink}
                  width="600"
                  height="800"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  class="flex-grow"
                >
                  Loading…
                </iframe>
              </div>
              {/* Form */}
            
            </div>
          </div>
        </section>
      </main>

      {/* <Banner /> */}
    </div>
  );
}

export default SignUp;
