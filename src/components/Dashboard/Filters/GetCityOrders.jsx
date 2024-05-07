import React, { useEffect, useState } from 'react'

import OrderCard from '../Cards/OrderCard';

const GetCityOrders = () => {
    const [flag,setFlag]=useState(0);
    const [city,setCity]=useState("");
     const [orderArray,setOrderArray]=useState([]);
     
     const [customers,setcustomers]=useState([]);
     

 

//Get the customer data 
  const getSetData=async()=>{

    
    const response=await fetch(`https://fliper-backend.vercel.app/api/user`,{
    method:'GET',
    headers:{
      "Content-Type":"application/json"
    },
   
  })
    const output=await response.json();
     setcustomers(output);
   

  }
 
   
        
      
     
    

 
  const getOrderById=async(id)=>{

    //get the demo data
   const response=await fetch(`https://fliper-backend.vercel.app/api/order/getOrder`,{
    method:'POST',
    
    headers:{
      "Content-Type":"application/json",
     "Access-Control-Allow-Origin": "*"
    },
    body:JSON.stringify({
     c_id:id
    })
  })
  const output= await response.json();
   
  console.log(output)
  setOrderArray([...orderArray,output]);

  }
  useEffect(()=>{
getSetData();
  
;},[])



    const handleonSubmit=()=>{
        
      //filter customer data
    const filtered = customers.filter((customer) =>
      customer.city.toLowerCase().includes(city)
    );
    
  

    //create orderArray
    filtered.map((customer,ind)=>{
        console.log(customer.c_id)
        getOrderById(customer.c_id);
    })
    
    setFlag(!flag)

    
   
  };
    
  return (
    <div className='h-screen'>
    {
        !flag?<div className='flex justify-center  align-middle  self-center  mt-20 h-screen'>
            <div> <input
                        type="text"
                        onChange={(e)=>setCity(e.target.value)}
                        placeholder="Enter City"
                        className="mb-4  text-white bg-black  p-1"
                      ></input>
                      <div className="mb-12 mx-auto w-1/2 pb-1  text-center ">
                      
                          <button
                          onClick={handleonSubmit}
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal "
                            type="button"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                         }}
                          >
                            Get order
                          </button>
                        

                       </div></div>
        </div>:     <div className='grid w-11/12 mt-20 h-fit grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mx-auto  sm:p-10 p-2 bg-slate-800 border-0 rounded-xl overflow-hidden'>
  {
    
    orderArray?.map((item, index) => {
      return (
        <div key={index}>
          <OrderCard data={item}/>
        </div>
      );
    })
  }
</div>
    }
    </div>
  )
}

export default GetCityOrders
