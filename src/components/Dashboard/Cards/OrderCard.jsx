import React, { useState } from 'react'
import { toast } from 'react-toastify'

const OrderCard = ({data}) => {

console.log(data);
	
  return (
   
	
	<div className=' bg-slate-900 border-0 rounded-xl my-5 py-2 mx-auto w-11/12'>
        
            <div className="max-w-md mx-auto  bg-slate-900  shadow-md rounded-lg overflow-hidden">
      <div className="p-4 text-slate-100 font-semibold text-3xl">
       
        <div className="mt-2">
            <div className="flex justify-between items-center">
            <span className="text-lg text-gray-100">Product_Id:</span>
            <span className="text-lg text-sky-100 font-semibold ">{data?.p_id}</span>
          </div>
          <div className="mt-2">
            <div className="flex justify-between items-center">
            <span className="text-lg text-gray-100">Customer_Id:</span>
            <span className="text-lg text-sky-100 font-semibold ">{data?.c_id}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-100">ProductName:</span>
            <span className="text-lg text-sky-100 font-semibold ">{data?.productName}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg text-gray-100">Quantity:</span>
            <span className="text-lg text-sky-100 font-semibold ">{data?.quantity}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg text-gray-100">Pricing:</span>
            <span className="text-lg text-sky-100 font-semibold ">{data?.pricing}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg text-gray-100">Mrp</span>
            <span className="text-lg text-sky-100 font-semibold ">{data?.mrp}</span>
          </div>
         
         
          
      </div>
    </div>
    </div>  
             </div></div>

  )
}

export default OrderCard