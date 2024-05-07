
import { useContext, useState } from "react";
import React  from "react";
import {ToastContainer, toast} from 'react-toastify'

import anime from "../assets/boat.jpeg"
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";



const Login = () => {
   
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
const {user,setUser}=useContext(UserContext);

const navigate= useNavigate();
  const handlonsubmit= async(e)=>{
   e.preventDefault();
   const response=await fetch(`https://fliper-backend.vercel.app/api/user/login`,{
    method:'POST',
    
    headers:{
      "Content-Type":"application/json",
     "Access-Control-Allow-Origin": "*"
    },
    body:JSON.stringify({
      email,
      password
    })
  })

  
  const output=await response.json();
 
 if(output.success==false)
    {

  {
      setPassword("");
   alert
    (`invalid creditantials`)
    
  }
    }
  else
  {
      alert("Login Successfully:")
setUser(output);
 navigate("/home")
    
      
  }
 
 



  }
  

   return (
    <section className="  mt-10 h-screen   bg-neutral-200 dark:bg-neutral-700">
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
                      <p className="mb-4">Please login to your account</p>
                      {/* <!--Username input--> */}
                      <input
                        type="text"
                        // label="Enter Your Username"
                        onChange={(e)=>setEmail(e.target.value)}
                        className="mb-4 p-1 w-full bg-black"
                        placeholder="Enter Your Email"
                      ></input>

                      {/* <!--Password input--> */}
                      <input
                        type="password"
                        value={password}
                         onChange={(e)=>setPassword(e.target.value)}
                         className="mb-4 p-1 w-full bg-black"
                          placeholder="Enter Your Password"
                      ></input>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                      
                          <button
                           onClick={handlonsubmit}
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] hover:bg-teal-400 focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Log in
                          </button>
                          
                        

                        {/* <!--Forgot password link--> */}
                        <a href="#!">Forgot password?</a>
                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                   
                          <button
                          
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-teal-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-teal-400 dark:hover:bg-opacity-10"
                          >
                         <Link to="/signup">SignUp</Link>
                          </button>
                     
                      </div>
                    </form>
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

export default Login
