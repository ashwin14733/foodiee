import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import Anothernav from './Anothernav'
import Cart from './Cart'
import Pizza from "./Pizza"
import Noodles from "./Noodles"
import Paratha from "./Paratha"
import Shakes from "./Shakes"
import Chatitems from "./Chatitems"



function App() {
  const [cart, setCart] = useState([])
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element = {<Navbar></Navbar>}>
          <Route path='/' element = {<Home></Home>}></Route>
          <Route path='/shop' element = {<Shop cart = {cart} setCart = {setCart}></Shop>}></Route>
          <Route path='/cart' element = {<Cart cart = {cart} setCart = {setCart}></Cart>}></Route>
          <Route path='/pizza' element = {<Pizza cart = {cart} setCart = {setCart}></Pizza>}></Route>
          <Route path='/noodles' element = {<Noodles cart = {cart} setCart = {setCart}></Noodles>}></Route>
          <Route path='/paratha' element = {<Paratha cart = {cart} setCart = {setCart}></Paratha>}></Route>
          <Route path='/shakes' element = {<Shakes cart = {cart} setCart = {setCart}></Shakes>}></Route>
          <Route path='/chatitems' element = {<Chatitems cart = {cart} setCart = {setCart}></Chatitems>}></Route>




        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
