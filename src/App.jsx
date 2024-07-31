import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portofolio from './Components/Portofolio/Portofolio'
import Contact from './Components/Contact/Contact'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import LayOut from './Components/LayOut/LayOut'

const routing =createHashRouter([

  {element:<LayOut/> , children:[
    {path:'',element:<Home/>},
  {path:'about',element:<About/>},
  {path:'portofolio',element:<Portofolio/>},
  {path:'contact',element:<Contact/>},
]}
  
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={routing}> 
  </RouterProvider>
    </>
  )
}

export default App
