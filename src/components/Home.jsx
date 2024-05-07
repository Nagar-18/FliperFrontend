// Home.js
import React, { useContext } from 'react';

import Sidebar from './Dashboard/SideBar';
import HomeCard from './Dashboard/Cards/HomeCard';
import UserContext from '../context/UserContext';
import Dummy from './Dummy';
const items=[{to:"/getcitycustomer",content:"You Can filter out customer on the basis of city",name:"FilterOut customer"},
    {to:"/getcityorder",content:"You Can filter out Order on the basis of city",name:"FilterOut Order"},
     {to:"/gethistory",content:"wanna get the history of particular customer",name:"FilterOut history"},
]

const Home = () => {
    const {user,setUser}=useContext(UserContext);
  return (
   <>
   {
    user? <div className="flex h-screen bg-slate-600 mt-20">
      <Sidebar />
       <div className='grid  w-11/12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mx-auto  sm:p-10 p-2 bg-slate-800 border-0 rounded-xl overflow-hidden'>
        {
            items.map((item,index)=>{
                return <HomeCard item={item}/>
            })
        }
        </div>
    </div>:<Dummy/>
   }
   </>
  );
};

export default Home;

