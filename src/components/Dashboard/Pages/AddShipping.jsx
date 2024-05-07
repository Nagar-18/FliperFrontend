import React, { useContext, useEffect, useState } from "react";

import anime from "../../../assets/boat.jpeg"
import {toast} from 'react-toastify'
import { useId } from "react";
import UserContext from "../../../context/UserContext";
import Dummy from "../../Dummy";


const AddShipping= () => {
    const {user,setUser}=useContext(UserContext);
 const [address,setaddress]=useState("");
 const [city,setcity]=useState("");
 const [pincode,setpincode]=useState("");
 
 const [p_id,setp_id]=useState("");
 const [c_id,setc_id]=useState("");


 
const [flag,setFlag]=useState(false);




 const handleonSubmit=async(e)=>{
  

   
    e.preventDefault();
    const response= await fetch(`http://localhost:5000/api/shipping`,{
      method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify({
      address,
      city,
      pincode,
     
      p_id,
      c_id,
      

    })
  
  })
  const output=await response.json();

  if(output.success)
  {
    
   
     alert("shipping Created Successfully");

    setFlag(!flag);

    
    
  }
  else
 {
  alert("Invalid Inputs");
  
 }
  
  
  }

   return (
  <>{
    user? <section className=" h-screen  mt-10   bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full  p-5">
        <div className="g-6 flex  h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg  w-[90vw] bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0  lg:flex  lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4   md:px-0 lg:w-6/12 ">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                   

                    <form>
                   
                      {/* <!--address input--> */}
                      <input
                        type="text"
                        onChange={(e)=>setaddress(e.target.value)}
                        placeholder="address"
                        className="mb-4 w-full bg-black  p-1"
                      ></input>

                       <input
                        type="text"
                        onChange={(e)=>setcity(e.target.value)}
                        placeholder="Enter city"
                       className="mb-4 w-full bg-black  p-1"
                      ></input>
                          <input
                       type="number"
                        onChange={(e)=>setpincode(e.target.value)}
                        placeholder="Enter pincode"
                       className="mb-4 w-full bg-black  p-1"
                      ></input>
                      <input
                       type="text"
                        onChange={(e)=>setp_id(e.target.value)}
                        placeholder="Enter your p_id"
                       className="mb-2 w-full bg-black  p-1"
                      ></input>
                       <input
                        type="text"
                        onChange={(e)=>setc_id(e.target.value)}
                        placeholder="Enter your c_id"
                       className="mb-2 w-full bg-black  p-1"
                      ></input>
                        
                     
                    </form>
                  </div>
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
                            Create Shipping
                          </button>
                        

                       </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex   sm:none bg-neutral-200 dark:bg-neutral-700 items-center bg-cover rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    backgroundImage: `url(${anime})`
                      
                  }}
                >
                
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>:<Dummy/>
  }
  </>
  );
}

export default AddShipping


