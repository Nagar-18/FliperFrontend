import React, { useEffect, useState } from 'react'
import Sidebar from './SideBar'
import ShippingCard from './Cards/ShippingCard';


const Shipping = () => {
      const [items,setItems]=useState([]);

  const getSetData=async()=>{

    //get the demo data
    const response=await fetch(`http://localhost:5000/api/shipping`,{
    method:'GET',
    headers:{
      "Content-Type":"application/json"
    },
   
  })
    const output=await response.json();
   
  
  setItems(output);



  }
  useEffect(()=>{

  getSetData()
;},[])
  return (
   <div className="flex h-screen mt-20">
      <Sidebar />
      <div className="flex flex-col flex-1">
       
                   <div className='grid w-11/12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mx-auto  sm:p-10 p-2 bg-slate-800 border-0 rounded-xl overflow-hidden'>
  {
    
    items?.map((item, index) => {
      return (
        <div key={index}>
          <ShippingCard data={item}/>
        </div>
      );
    })
  }
</div>
      </div>
    </div>
  )
}

export default Shipping
