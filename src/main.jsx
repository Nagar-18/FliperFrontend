import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Home from './components/Home.jsx'
import Customer from './components/Dashboard/Customer.jsx'
import Order from './components/Dashboard/Order.jsx'
import Shipping from './components/Dashboard/Shipping.jsx'
import AddOrder from './components/Dashboard/Pages/AddOrder.jsx'
import AddShipping from './components/Dashboard/Pages/AddShipping.jsx'
import GetCityCustomers from './components/Dashboard/Filters/GetCityCustomers.jsx'
import GetCityOrders from './components/Dashboard/Filters/GetCityOrders.jsx'
import GetHistory from './components/Dashboard/Filters/GetHistory.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'


const router= createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
     
      {
            path: "/",
            element: <Home/>,
      },
      {
            path: "/home",
            element: <Home/>,
      },
     
      {
        path: "/login",
            element: <Login />,
      },
       {
        path: "/signup",
            element: <Signup />,
      },
      {
        path:"/customer",
        element:<Customer/>

      },
      {
        path:"/order",
        element:<Order/>

      },
       {
        path:"/shipping",
        element:<Shipping/>

      },
      {
         path:"/addorder",
        element:<AddOrder/>

      },
       {
         path:"/addshipping",
        element:<AddShipping/>

      }
      , {
         path:"/getcitycustomer",
        element:<GetCityCustomers/>

      }
      , {
         path:"/getcityorder",
        element:<GetCityOrders/>

      }
      , {
         path:"/gethistory",
        element:<GetHistory/>

      }


     
    ],
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    <RouterProvider router={router}>
    <App /></RouterProvider></UserContextProvider>
  </React.StrictMode>,
)
