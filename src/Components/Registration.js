import React from 'react';
import { Link } from "react-router-dom";
import './Registration.css';

function Registration(){
return(
  <div>
  <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
      <div>
          <a href="/">
              <h3 className="text-4xl font-bold text-purple-600">
                  Greentick 
              </h3>
          </a>
      </div>
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form>
          <div className="mb-2">
              <label
                  htmlFor="email"
                  className="block text-sm-5 font-semibold text-gray-800"
              >
                  Name
              </label>
              <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
          </div>
          <div className="mb-2">
              <label
                  htmlFor="email"
                  className="block text-sm-5 font-semibold text-gray-800"
              >
                  Email
              </label>
              <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
          </div>
          <div className="mb-2">
              <label
                  htmlFor="password"
                  className="block text-sm-5 font-semibold text-gray-800"
              >
                  Password
              </label>
              <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
          </div>
          <div className="mb-2">
              <label
                  htmlFor="password"
                  className="block text-sm-5 font-semibold text-gray-800"
              >
                 Confirm Password
              </label>
              <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
          </div>
             
                  Forget Password?
             
              <div className="flex items-center mt-4">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 font-semibold text-sm-5">
                      Register
                  </button>
              </div>
          </form>
          <div className="mt-4 text-grey-600 font-semibold text-sm-5">
              Already have an account?{" "}
              <span>
                 <Link to="/Login">Login</Link> 
              </span>
          </div>
          <div className="flex items-center w-full my-4">
              <hr className="w-full" />
              <p className="px-3 font-semibold tetx-sm-2">OR</p>
              <hr className="w-full" />
          </div>
          <div className="my-6 space-y-2">
              <button
                  aria-label="Login with Google"
                  type="button"
                  className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
              >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-5 h-5 fill-current"
                  >
                      <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                  <p className="font-semibold tetx-sm-5">Login with Google</p>
              </button>
          </div>
      </div>
  </div>
</div>
)
}
export default Registration;