import React, { useContext, useEffect, useRef, useState } from "react";

import anime from "../assets/boat.jpeg"
import {toast} from 'react-toastify'
import { useId } from "react";

// import UserContext from "../context/UserContext";
const Signup = () => {
 const [username,setUsername]=useState("");
 const [contact,setContact]=useState("");
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [cpassword,setCPassword]=useState("");
 const [address,setAddress]=useState("");
 const [city,setCity]=useState("");
 const [showPassword, setShowPassword] = useState(false);

 
const [flag,setFlag]=useState(false);
  const idRef = useRef(0);
const [alluser,setAlluser]=useState([]);

 const generateUniqueId = (prefix='') => {
    idRef.current += 1;
    return `${prefix}${idRef.current}${Math.random().toString(36).substr(2, 9)}`;
  };
const id=generateUniqueId();



// useEffect(()=>{
// getSetdata();
// },[flag])
 const handleonSubmit=async(e)=>{
  

    if(cpassword!==password)
    {
        alert("Password is not Matched ");
    }
    e.preventDefault();
    const response= await fetch(`https://fliper-backend.vercel.app/api/user`,{
      method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify({
      name:username,
      contact,
      email,
      password,
      address,
      city,
      c_id:id

    })
  
  })
  const output=await response.json();
 
  if(output.success)
  {
    
   
     alert("Account Created Successfully")
    setFlag(!flag);

    
    
  }
  else
 {
  alert("Invalid Email");
  setEmail("");
  setContact("");
  setPassword("");
  setCPassword("");
 }
  
  
  }


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
 




   return (
   <section className="h-screen  mt-20   bg-neutral-200 dark:bg-neutral-700">
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
                   
                      {/* <!--Username input--> */}
                      <input
                        type="text"
                        onChange={(e)=>setUsername(e.target.value)}
                        placeholder="Username"
                        className="mb-4 w-full bg-black  p-1"
                      ></input>

                       <input
                        type="text"
                        onChange={(e)=>setContact(e.target.value)}
                        placeholder="Enter Contact no"
                       className="mb-4 w-full bg-black  p-1"
                      ></input>
                          <input
                        type="email"
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="Enter Email id"
                       className="mb-4 w-full bg-black  p-1"
                      ></input>
                      
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          onChange={(e)=>setPassword(e.target.value)}
                          placeholder="Password"
                          className="mb-4 w-full bg-black  p-1 pr-10"
                        ></input>
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute inset-y-2 mb-4 right-0 pr-3 flex items-center text-gray-100"
                        >
                          {!showPassword ? (
                           <p>show</p>
                          ) : (
                            <p>hide</p>
            
                          )}
                        </button>
                      </div>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          onChange={(e)=>setCPassword(e.target.value)}
                          placeholder="Confirm Password"
                          className="mb-4 w-full bg-black  p-1 pr-10"
                        ></input>
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute inset-y-2 mb-4 right-0 pr-3 flex items-center text-gray-100"
                        >
                          {!showPassword ? (
                           <p>show</p>
                          ) : (
                            <p>hide</p>
            
                          )}
                        </button>

                      </div>
                       <input
                        type="text"
                        onChange={(e)=>setCity(e.target.value)}
                        placeholder="Enter your city"
                       className="mb-2 w-full bg-black  p-1"
                      ></input>
                        <input
                        type="text"
                        onChange={(e)=>setAddress(e.target.value)}
                        placeholder="Enter Complete adddress"
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
                            Create Account
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
    </section>
  );
}

export default Signup

