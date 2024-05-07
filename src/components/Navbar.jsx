import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import UserContext from '../context/UserContext';
// import UserContext from '../context/UserContext';


function Navbar() {
  	
  const [isOpen, setIsOpen] = useState(false);
 const {user,setUser}=useContext(UserContext);
 
  return (
    <nav className=" dark:bg-gray-900 fixed w-full z-20 top-0 start-0 pb-2   rounded-sm border-[gradient-to-r from-red-600 to-violet-600]  group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
      <div className="w-screen  flex flex-wrap items-center  justify-evenly  mx-auto p-4">
        <a href="#" className="flex text-white items-center ml-12 space-x-3 rtl:space-x-reverse">
          <img src="#" className="h-8" alt="FLiper"/>
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button className="text-white hover:bg-violet-600  focus:ring-4 focus:outline-none  bg-gradient-to-r bg-[d8363a] focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">
           {
            !user?<Link to="/login">Get Started</Link>:<Link onClick={()=>setUser(null)} to="/login">Logout</Link>
           } 
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <motion.div
          className="items-center  z-50 justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
          initial={false}
          animate={{ height: isOpen ? "auto" : 0,  }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/addorder" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Add Order </Link>
            </li>
            <li>
             <Link to="/addshipping" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Add Shipping</Link>
            </li>
           
           
          </ul>
        </motion.div>
        <div className='items-center   justify-center hidden w-full md:flex md:w-auto'>


        <ul className="flex  justify-center   ml-72  flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  bg-gray-50  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/"  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
            </li>
            <li>
            <Link to="/addorder" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Add Order </Link>
            </li>
            <li>
              <Link to="/addshipping" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Add Shipping</Link>
            </li>
          
            
          </ul>
        </div>
          
      </div>
    </nav>
  );
}

export default Navbar;
