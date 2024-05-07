import React, { useState } from 'react'
import { toast } from 'react-toastify'

const CustomerCard = ({data }) => {

console.log(data);
	
  return (
   
	
	<div className=' bg-slate-900 border-0 rounded-xl my-5 py-2 mx-auto w-11/12'>
        
            <div className="max-w-md mx-auto  bg-slate-900  shadow-md rounded-lg overflow-hidden">
      <div className="p-4 text-slate-100 font-semibold text-3xl">
       
        <div className="mt-2">
            <div className="flex justify-between items-center">
            <span className="text-lg text-gray-100">Id:</span>
            <span className="text-lg text-sky-100 font-semibold ">{data?.c_id}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-100">Name:</span>
            <span className="text-lg text-sky-100 font-semibold ">{data?.name}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg text-gray-100">City:</span>
            <span className="text-lg text-sky-100 font-semibold ">{data?.city}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg text-gray-100">Email:</span>
            <span className="text-lg text-sky-100 font-semibold ">{data?.email}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg text-gray-100">Contact</span>
            <span className="text-lg text-sky-100 font-semibold ">{data?.contact}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg text-gray-100">Address:</span>
            <span className="text-lg text-sky-100 font-semibold ">{data?.address}</span>
          </div>
         
          
      </div>
    </div>
    </div>  
             </div>

  )
}

export default CustomerCard
