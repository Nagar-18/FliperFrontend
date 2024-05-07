import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>

   <Navbar/>
  
<div className='bg-slate-600  '>
  
   <Outlet/>
    
   </div>
   </>
  )
}

export default App
