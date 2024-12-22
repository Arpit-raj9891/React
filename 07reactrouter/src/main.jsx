import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './Contact/Conatct.jsx'
import { Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

//const router=createBrowserRouter([   //createBrowserRouter is used to create a router
//  {
//    path:'/',
//    element:<Layout />,
//    children:[
//      {
//        path:"",
//        element:<Home />
//      },
//      {
//        path:"About",
//        element:<About />
//      },
//      {
//        path:"contact",
//        element:<Contact />      
//      },
//    ]
//  }
//])

const router=createBrowserRouter(   //alternate way to create a router
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route
      loader={githubInfoLoader}  //another way for github using this way lag is avoided
       path='github'
       element={<Github/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
