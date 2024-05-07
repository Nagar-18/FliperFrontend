import React, { useEffect, useState } from 'react'
import CustomerCard from '../Cards/CustomerCard';

const GetCityCustomers = () => {
    const [flag,setFlag]=useState(0);
    const [city,setCity]=useState("");
     const [customers,setcustomers]=useState([]);
     const [fliterdCustomers,setFilteredCustomers]=useState([]);

 
  const getSetData=async()=>{

    //get the demo data
    const response=await fetch(`http://localhost:5000/api/user`,{
    method:'GET',
    headers:{
      "Content-Type":"application/json"
    },
   
  })
    const output=await response.json();
   
  
  setcustomers(output);

  }
  useEffect(()=>{
getSetData();
  
;},[])
    const handleonSubmit=()=>{
        
      e.preventDefault();
     const filtered = customers.filter((customer) =>
      customer.city.toLowerCase().includes(city)
    );
    
    setFilteredCustomers(filtered);
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
                            Get Customers
                          </button>
                        

                       </div></div>
        </div>:     <div className='grid w-11/12 mt-20 h-fit grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mx-auto  sm:p-10 p-2 bg-slate-800 border-0 rounded-xl overflow-hidden'>
  {
    
    fliterdCustomers?.map((item, index) => {
      return (
        <div key={index}>
          <CustomerCard data={item}/>
        </div>
      );
    })
  }
</div>
    }
    </div>
  )
}

export default GetCityCustomers
