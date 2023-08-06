import React from "react";
import { Link } from "react-router-dom";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Banner from "../partials/Banner";

function Pricing() {
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
        <section class="pt-28 pb-32 bg-gray-800 overflow-hidden">
          <div class="container mx-auto px-4">
            <div class="max-w-xl">
              <span class="inline-block mb-3 text-gray-600 text-base">
                Flexible Pricing Plan
              </span>
              <h2 class="mb-16 font-heading font-bold text-6xl sm:text-7xl text-gray-200">
                Everything you need to launch a website
              </h2>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full md:w-1/3">
                <div class="pt-8 px-11 xl:px-20 pb-10 bg-transparent border-b md:border-b-0 md:border-r border-gray-950 rounded-10">
                  <h3 class="mb-0.5 font-heading font-semibold text-lg text-gray-200">
                    Basic
                  </h3>
                  <p class="mb-5 text-gray-600 text-sm">Best for freelancers</p>
                  <div class="mb-9 flex">
                    <span class="mr-1 mt-0.5 font-heading font-semibold text-lg text-gray-200">
                      $
                    </span>
                    <span class="font-heading font-semibold text-6xl sm:text-7xl text-gray-200">
                      29
                    </span>
                    <span class="font-heading font-semibold self-end">/ m</span>
                  </div>
                  <div class="p-1">
                    <button class="group relative mb-9 p-px w-full font-heading font-semibold text-xs text-gray-200 bg-gradient-green uppercase tracking-px overflow-hidden rounded-md">
                      <div class="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-green transition ease-in-out duration-500"></div>
                      <div class="p-4 text-gray-800 bg-gray-50 overflow-hidden rounded-md">
                        <p class="relative z-10">Join now</p>
                      </div>
                    </button>
                  </div>
                  <ul>
                    <li class="flex items-center font-heading mb-3 font-medium text-base text-gray-200">
                      <svg
                        class="mr-2.5"
                        width="22"
                        height="22"
                        viewbox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                          stroke="#A1A1AA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p>100GB Cloud Storage</p>
                    </li>
                    <li class="flex items-center font-heading mb-3 font-medium text-base text-gray-200">
                      <svg
                        class="mr-2.5"
                        width="22"
                        height="22"
                        viewbox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                          stroke="#A1A1AA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p>10 Email Connection</p>
                    </li>
                    <li class="flex items-center font-heading font-medium text-base text-gray-200">
                      <svg
                        class="mr-2.5"
                        width="22"
                        height="22"
                        viewbox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                          stroke="#A1A1AA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p>Daily Analytics</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="w-full md:w-1/3">
                <div class="pt-8 px-11 xl:px-20 pb-10 bg-transparent rounded-10">
                  <h3 class="mb-0.5 font-heading font-semibold text-lg text-gray-200">
                    Premium
                  </h3>
                  <p class="mb-5 text-gray-600 text-sm">
                    Best for small agency
                  </p>
                  <div class="mb-9 flex">
                    <span class="mr-1 mt-0.5 font-heading font-semibold text-lg text-gray-200">
                      $
                    </span>
                    <span class="font-heading font-semibold text-6xl sm:text-7xl text-gray-200">
                      99
                    </span>
                    <span class="font-heading font-semibold self-end">/ m</span>
                  </div>
                  <div class="p-1">
                    <button class="group relative mb-9 p-px w-full font-heading font-semibold text-xs text-gray-200 bg-gradient-green uppercase tracking-px overflow-hidden rounded-md">
                      <div class="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-green transition ease-in-out duration-500"></div>
                      <div class="p-4 text-gray-800 bg-gray-50 overflow-hidden rounded-md">
                        <p class="relative z-10">Join now</p>
                      </div>
                    </button>
                  </div>
                  <ul>
                    <li class="flex items-center font-heading mb-3 font-medium text-base text-gray-200">
                      <svg
                        class="mr-2.5"
                        width="22"
                        height="22"
                        viewbox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                          stroke="#A1A1AA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p>500GB Cloud Storage</p>
                    </li>
                    <li class="flex items-center font-heading mb-3 font-medium text-base text-gray-200">
                      <svg
                        class="mr-2.5"
                        width="22"
                        height="22"
                        viewbox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                          stroke="#A1A1AA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p>50 Email Connection</p>
                    </li>
                    <li class="flex items-center font-heading mb-3 font-medium text-base text-gray-200">
                      <svg
                        class="mr-2.5"
                        width="22"
                        height="22"
                        viewbox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                          stroke="#A1A1AA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p>Daily Analytics</p>
                    </li>
                    <li class="flex items-center font-heading font-medium text-base text-gray-200">
                      <svg
                        class="mr-2.5"
                        width="22"
                        height="22"
                        viewbox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                          stroke="#A1A1AA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p>Premium Support</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="w-full md:w-1/3">
                <div class="relative pt-8 px-11 pb-10 bg-white rounded-10 shadow-8xl">
                  <p class="absolute right-2 top-2 font-heading px-2.5 py-1 text-xs max-w-max bg-gray-100 uppercase tracking-px rounded-full text-gray-900">
                    Popular choice
                  </p>
                  <h3 class="mb-0.5 font-heading font-semibold text-lg text-gray-900">
                    Enterprise
                  </h3>
                  <p class="mb-5 text-gray-600 text-sm">
                    Best for large agency
                  </p>
                  <div class="mb-9 flex">
                    <span class="mr-1 mt-0.5 font-heading font-semibold text-lg text-gray-900">
                      $
                    </span>
                    <span class="font-heading font-semibold text-6xl sm:text-7xl text-gray-900">
                      199
                    </span>
                    <span class="font-heading font-semibold self-end">/ m</span>
                  </div>
                  <div class="group relative mb-9">
                    <div class="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 p-1 rounded-lg transition ease-out duration-300"></div>
                    <button class="p-1 w-full font-heading font-semibold text-xs text-gray-900 uppercase tracking-px overflow-hidden rounded-md bg-gray-200">
                      <div class="relative z-10 p-4 bg-gradient-green overflow-hidden rounded-md">
                        <p>Join now</p>
                      </div>
                    </button>
                  </div>
                  <ul>
                    <li class="flex items-center font-heading mb-3 font-medium text-base text-gray-900">
                      <svg
                        class="mr-2.5"
                        width="22"
                        height="22"
                        viewbox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                          stroke="#A1A1AA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p>2TB Cloud Storage</p>
                    </li>
                    <li class="flex items-center font-heading mb-3 font-medium text-base text-gray-900">
                      <svg
                        class="mr-2.5"
                        width="22"
                        height="22"
                        viewbox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                          stroke="#A1A1AA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p>Unlimited Email Connection</p>
                    </li>
                    <li class="flex items-center font-heading mb-3 font-medium text-base text-gray-900">
                      <svg
                        class="mr-2.5"
                        width="22"
                        height="22"
                        viewbox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                          stroke="#A1A1AA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p>Daily Analytics</p>
                    </li>
                    <li class="flex items-center font-heading font-medium text-base text-gray-900">
                      <svg
                        class="mr-2.5"
                        width="22"
                        height="22"
                        viewbox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.58301 11.9167L8.24967 15.5834L17.4163 6.41669"
                          stroke="#A1A1AA"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p>Premium Support</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Banner /> */}
    </div>
  );
}

export default Pricing;
