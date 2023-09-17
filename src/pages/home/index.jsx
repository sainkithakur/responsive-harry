import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex  ">
        <div>
          <div class="flex items-center text-center lg:text-left  md:ml-32 sm:ml-24 mt-16">
            <div>
              <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl ">
                Welcome to
                <span class="text-purple-700 dark:text-purple-600">
                  CodeWithHarry
                </span>
              </h2>
              <h4 class="text-xl font-semibold text-gray-800 md:text-2xl ">
                Learn
                <span class="text-purple-700 dark:text-purple-600">Java</span>
                <span
                  class="typed-cursor typed-cursor--blink"
                  aria-hidden="true">
                  |
                </span>
                <span
                  class="typed-cursor typed-cursor--blink"
                  aria-hidden="true">
                  |
                </span>
              </h4>
              <p class="mt-2 text-sm text-gray-500 md:text-base dark:text-gray-600">
                Confused on which course to take? I have got you covered. Browse
                courses and
                <br /> find out the best course for you. Its free! Code With
                Harry is my attempt to teach
                <br /> basics and those coding techniques to people in shor time
                which took me ages to
                <br /> learn.
              </p>
              <div class="flex justify-center lg:justify-start mt-6">
                <button class="px-3 py-2 lg:px-4 lg:py-3 bg-black text-white text-xs font-semibold rounded  hover:bg-gray-800   dark:hover:bg-gray-700">
                  Free Courses
                </button>
                <button class="px-3 py-2 mx-4 lg:px-4 lg:py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400">
                  Explore Blog
                </button>
              </div>
            </div>
          </div>
        </div>

        <img
          className=" h-96  ml-40 lg:w-1/2 md:hidden hidden lg:flex  "
          src={require("/codewithharry/my-app/src/assist/Screenshot 2023-09-16 220858.png")}
        />
      </div>

      <div>
        <h1 className="text-center mt-10 text-3xl mb-7">Recommended Courses</h1>
      </div>
      <div class="flex flex-row flex-wrap  ">
        <div className="shadow-2xl rounded-xl mb-10 ml-5 mr-5 lg:ml-32  ">
          <img
            className="h-56 w-96 rounded-lg  "
            src={require("/codewithharry/my-app/src/assist/7wnove7K-ZQ-HD.jpg")}
          />
          <p className="ml-5 text-xs mt-5">FREE COURSE</p>
          <h1 className="ml-5 text-lg">Python Tutorials - 100 Days of Code</h1>
          <h4 className="ml-5 text-gray-600">
            Python is one of the most demanded <br /> programming languages in
            the job
            <br />
            market. Surprisingly, it is equally easy to <br /> learn and master
            Python. Let's commit
            <br /> our 100 days of code to python!
          </h4>
          <button
            type="button"
            className="px-5 py-2 font-semibold rounded-full dark:bg-purple-700 dark:text-white ml-5 mt-14 mb-5">
            Start Watching
          </button>
        </div>
        <div className="shadow-2xl rounded-xl mb-10 ml-5 mr-5 lg:ml-14 ">
          <img
            className="h-56 w-96 rounded-lg  "
            src={require("/codewithharry/my-app/src/assist/JS-Thumb.jpg")}
          />
          <p className="ml-5 text-xs mt-5">FREE COURSE</p>
          <h1 className="ml-5 text-lg">Ultimate JavaScript Course</h1>
          <h4 className="ml-5 text-gray-600">
            This latest JavaScript course comes with
            <br /> premium curriculum that covers
            <br /> everything from basics to advance. On
            <br /> top of that, you will get my handwritten
            <br /> notes of JS for completely free. What are <br />
            you waiting for? Just Enroll Buddy Start Watching
          </h4>
          <button
            type="button"
            className="px-5 py-2 font-semibold rounded-full dark:bg-purple-700 dark:text-white ml-5 mt-7 mb-5">
            Start Watching
          </button>
        </div>
        <div className="shadow-2xl  rounded-xl mb-10 ml-5 mr-5 lg:ml-14 md:mr-14">
          <img
            className="h-56 w-96 rounded-lg  "
            src={require("/codewithharry/my-app/src/assist/090fefe24d23d47584f6ddc7eb5a241e.png")}
          />
          <p className="ml-5 text-xs mt-5">FREE COURSE</p>
          <h1 className="ml-5 text-lg">React JS Tutorials For Beginners</h1>
          <h4 className="ml-5 text-gray-600">
            React is a free and open-source front-
            <br />
            end JavaScript library. This series will <br />
            cover React from starting to the end. We
            <br /> will learn react from the ground up!
          </h4>
          <button
            type="button"
            className="px-5 py-2 font-semibold rounded-full dark:bg-purple-700 dark:text-white ml-5 mt-20 mb-5">
            Start Watching
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-center mt-10 text-3xl mb-7">Testimonials</h1>
      </div>
      <div class="grid md:grid-cols-2 ">
        <div className="bg-gray-200   mr-5 ml-5 md:ml-14 rounded-xl mb-10 max-auto md:h-full  ">
          <h1 className="mt-5 ml-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="block w-5 h-5 text-gray-400 mb-4"
              viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
          </h1>
          <p className="ml-14 text-md text-gray-400">
            I don't have words to thank this man, I'm really grateful to have
            this
            <br /> channel and website in my daily routine. If you're a mere
            beginner,
            <br /> then you can trust this guy and can put your time into his
            <br /> content. I can assure you that it'll be worth it.
          </p>
          <h1 className="ml-16 mt-5">Mohit Kumar</h1>
          <h6 className="ml-16 text-xs text-gray-500 mb-5">Web Developer</h6>
        </div>
        <div className="bg-gray-200  mr-5 ml-5 rounded-lg mb-10  md:h-full md:mr-10 h-full">
          <h1 className="mt-5 ml-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="block w-5 h-5 text-gray-400 mb-4"
              viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
          </h1>
          <p className="ml-14 text-md text-gray-400">
            I don't have words to thank this man, I'm really grateful to have
            this
            <br /> channel and website in my daily routine. If you're a mere
            beginner,
            <br /> then you can trust this guy and can put your time into his
            <br /> content. I can assure you that it'll be worth it.
          </p>
          <h1 className="ml-16 mt-5">Rakesh Shetty</h1>
          <h6 className="ml-16 text-xs text-gray-500 md:mb-5">Web Developer</h6>
        </div>
      </div>
    </div>
  );
};

export default Home;
