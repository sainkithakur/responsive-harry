import React from "react";
import { AiFillHome } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <header class="text-gray-600 body-font shadow-lg ">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <AiFillHome className="text-xl text-purple-700 mr-72 lg:mr-16" />
          </a>
          <nav class="md:ml-auto md:mr-auto  flex-wrap items-center   text-base justify-center hidden md:flex">
            <a className="mx-2 my-2 text-purple-800 hover:border-b-2 hover:border-purple-700 cursor-pointer ">
              HTML
            </a>
            <a className="mx-2 my-2 text-purple-800 hover:border-b-2 hover:border-purple-700 cursor-pointer f">
              CSS
            </a>
            <a className="mx-2 my-2 text-purple-800 hover:border-b-2 hover:border-purple-700 cursor-pointer ">
              JS
            </a>
            <a className="mx-2 my-2 text-purple-800 hover:border-b-2 hover:border-purple-700 cursor-pointer ">
              C
            </a>
            <a className="mx-2 my-2 text-purple-800 hover:border-b-2 hover:border-purple-700 cursor-pointer ">
              C++
            </a>
            <a className="mx-2 my-2 text-purple-800 hover:border-b-2 hover:border-purple-700 cursor-pointer ">
              JAVA
            </a>
            <a className="mx-2 my-2 text-purple-800 hover:border-b-2 hover:border-purple-700 cursor-pointer ">
              PYTHON
            </a>
            <a className="mx-2 my-2 text-purple-800 hover:border-b-2 hover:border-purple-700 cursor-pointer ">
              PHP
            </a>
            <a className="mx-2 my-2 text-purple-800 hover:border-b-2 hover:border-purple-700 cursor-pointer ">
              REACT JS
            </a>
          </nav>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            class="text-purple-700 dark:text-purple-800 cursor-pointer text-2xl absolute right-3 md:right-12 }"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
          </svg>
        </div>
      </header>
    </div>
  );
};

export default Header;
