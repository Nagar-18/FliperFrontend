
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
   <>

   { 
   isOpen? <aside className={`bg-gray-900 rounded-lg border-0  text-white  w-[22vw] min-h-screen ${isOpen ? 'block' : 'hidden'}`}>
      <div className="p-4">
        <button
          className="text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          {/* Toggle button or icon */}
            <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
        </button>
        {/* Sidebar content */}
        <ul className='h-full flex-col justify-evenly '>
          <li className="mb-4"><Link to="/" className="block hover:text-gray-300">Dashboard</Link></li>
          <li className="mb-4"><Link to="/customer" className="block hover:text-gray-300">Customers</Link></li>
          <li className="mb-4"><Link to="/order" className="block hover:text-gray-300">Orders</Link></li>
          <li className="mb-4"><Link to="/shipping" className="block hover:text-gray-300">Shipping</Link></li>
          {/* Add more sidebar items */}
        </ul>
      </div>
    </aside>:<>  <button
          className="text-white p-2 bg-slate-900 rounded-lg border-0 focus:outline-none"
          onClick={toggleSidebar}
        >
          {/* Toggle button or icon */}
          {isOpen ? 'Close' : 'Open'} 
        </button></>
}
   </>
  
  );
};

export default Sidebar;

