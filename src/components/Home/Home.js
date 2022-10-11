import React from "react";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    
      <div>
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="lg:text-7xl font-bold leading-none text-6xl xl:max-w-6xl text-gray-800">
            It matters <span className=" text-fuchsia-700 ">how you ask</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
            Assessment, instruction, and practice that motivate every student to
            mastery.
          </p>
          <div className="flex flex-wrap justify-center">
            <Link to="/quiz">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded-md text-gray-900 hover:bg-purple-900 text-white text-bold bg-purple-800"
              >
                Start Quiz
              </button>
            </Link>
            <Link to="/about">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded-md hover:bg-purple-300 bg-purple-200 text-gray-900"
              >
                Learn more
              </button>
            </Link>
          </div>
        <h2 className="text-2xl mt-4"> <span className=" text-3xl font-bold ">Used by 50 million+ people</span> around the world</h2>
        </div>
      </div>
   
   
  );
};

export default Home;
