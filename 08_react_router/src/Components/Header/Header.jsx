import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export function Headers() {

  return (
    <div className='relative w-full bg-white'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8'>
        <div className='inline-flex items-center space-x-2'>
          <span className='font-bold'>React Router</span>
        </div>
        <div className='hidden lg:block'>
          <ul className='inline-flex space-x-8'>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-blue-500" : "text-gray-800"
                  } cursor-pointer text-sm font-semibold text-gray-800`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/About"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-blue-500" : "text-gray-800"
                  } cursor-pointer text-sm font-semibold text-gray-800`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Contact"}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-blue-500" : "text-gray-800"
                  } cursor-pointer text-sm font-semibold text-gray-800`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='hidden lg:block'>
          <button
            type='button'
            className='rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
