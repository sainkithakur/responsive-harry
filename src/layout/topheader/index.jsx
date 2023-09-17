import React from "react";

const Topheader = () => {
  return (
    <div>
      <nav x-data="{ isOpen: false }" className="relative bg-white shadow ">
        <div className="container px-6 py-4 mx-auto md:flex lg:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="flex ">
              <span className="font-extrabold text-purple-700 text-lg cursor-pointer">
                <b className="font-extrabold">&lt;/&gt;</b> CodeWithHarry
              </span>
            </div>
          </div>

          <div className="absolute inset-x-0 z-20 md:hidden  w-full px-6 py-4 transition-all duration-300 ease-in-out hidden lg:flex   md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0  md:items-center">
            <div className=" flex flex-col md:flex-row md:mx-6 ">
              <a className="mx-2 my-2 text-black hover:border-b-2 hover:border-purple-700 cursor-pointer ">
                Home
              </a>
              <a className="mx-2 my-2 text-black hover:border-b-2 hover:border-purple-700 cursor-pointer f">
                Courses
              </a>
              <a className="mx-2 my-2 text-black hover:border-b-2 hover:border-purple-700 cursor-pointer ">
                Tutorial
              </a>
              <a className="mx-2 my-2 text-black hover:border-b-2 hover:border-purple-700 cursor-pointer ">
                Blog
              </a>
              <a className="mx-2 my-2 text-black hover:border-b-2 hover:border-purple-700 cursor-pointer ">
                Notes
              </a>
              <a className="mx-2 my-2 text-black hover:border-b-2 hover:border-purple-700 cursor-pointer ">
                Contect
              </a>
              <a className="mx-2 my-2 text-black hover:border-b-2 hover:border-purple-700 cursor-pointer ">
                My Gear
              </a>
              <a className="mx-2 my-2 text-black hover:border-b-2 hover:border-purple-700 cursor-pointer ">
                Work With Us
              </a>
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class=" text-purple-700 mt-1 ml-2 cursor-pointer "
                  height="28"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
                  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
                </svg>
              </div>
            </div>

            <div className="flex justify-center ">
              <button class="px-3 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-700 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Login
              </button>
              &nbsp;
              <button class="px-3 md:flex-wrap py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-700 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Signup
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topheader;
