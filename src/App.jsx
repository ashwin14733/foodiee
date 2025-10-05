// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
// import Navbar from './Navbar'
// import Home from './Home'
// import About from './About'
// import Shop from './Shop'
// import Anothernav from './Anothernav'
// import Cart from './Cart'
// import Briyani from './Briyani'
// import Pizza from "./Pizza"
// import Noodles from "./Noodles"
// import Paratha from "./Paratha"
// import Shakes from "./Shakes"
// import Chatitems from "./Chatitems"
// import Signup from './Credential/Signup'
// import Login from './Credential/Login'
// import Breakfast from './Categories/Breakfast'
// import Lunch from './Categories/Lunch'
// import Dinner from './Categories/Dinner'
// import Snacks from './Categories/Snacks'
// import Beverages from './Categories/Beverages'
// import Slider from './Slider'
// import ProductCarousel from './ProductCarousel'
// import FantaWebsite from './FantaWebsite'
// import AuthComponent from './Credential/AuthComponent'
// import Sliderone from './Sliderone'
// import Breakfastslider from './Categories/Breakfastslider'
// import Lunchslider from './Categories/Lunchslider'
// import Dinnerslider from './Categories/Dinnerslider'
// import Snacksslider from './Categories/Snacksslider'
// import Cartui from './Cartui'
// import Solar from './Solar'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { ScrollSmoother } from 'gsap/ScrollSmoother'
// import Products from './Products'

// gsap.registerPlugin(ScrollTrigger,ScrollSmoother);



// function App() {
//   const [cart, setCart] = useState([])
//   const location = useLocation();


//   useEffect(()=>{
//     if(ScrollSmoother.get()){
//       ScrollSmoother.get().kill()
//     }

//     if(location.pathname !== "/anothernav"){

//       ScrollSmoother.create({
//         wrapper :"#smooth-wrapper",
//         content : "#smooth-content",
//         smooth : 3,
//         effects : true,
//       })
//     }
//   },[location.pathname])
//   return (
//     <div className='box'>
//       {location.pathname === "/anothernav" ? (
//         <Routes>
//           <Route path="/anothernav" element={<Anothernav cart={cart} setCart={setCart}></Anothernav>}></Route>
//         </Routes>
//       ):(
//             <div id="smooth-wrapper">
//         <div id="smooth-content">
//           <BrowserRouter>
//             <Routes>
//                   {/* <Route element = {<Navbar></Navbar>}></Route> */}
//               <Route path='/' element = {<Signup></Signup>}></Route>
//               <Route path='/login' element = {<Login></Login>}></Route>

//               <Route path='/navbar' element = {<Navbar cart = {cart} setCart = {setCart}></Navbar>}></Route>
//               <Route path = '/anothernav' element = {<Anothernav cart={cart} setCart={setCart}></Anothernav>}></Route>  
//               <Route path='/home' element = {<Home></Home>}></Route>
//               <Route path='/shop' element = {<Shop cart = {cart} setCart = {setCart}></Shop>}></Route>
//               <Route path='/cart' element = {<Cart cart = {cart} setCart = {setCart}></Cart>}></Route>
//               <Route path='/briyani' element = {<Briyani cart={cart} setCart={setCart}></Briyani>}></Route>
//               <Route path='/pizza' element = {<Pizza cart = {cart} setCart = {setCart}></Pizza>}></Route>
//               <Route path='/noodles' element = {<Noodles cart = {cart} setCart = {setCart}></Noodles>}></Route>
//               <Route path='/paratha' element = {<Paratha cart = {cart} setCart = {setCart}></Paratha>}></Route>
//               <Route path='/shakes' element = {<Shakes cart = {cart} setCart = {setCart}></Shakes>}></Route>
//               <Route path='/chatitems' element = {<Chatitems cart = {cart} setCart = {setCart}></Chatitems>}></Route>
//               {/* <Route path='/briyani' element = {<Chatitems cart = {cart} setCart = {setCart}></Chatitems>}></Route> */}
//               <Route path='/breakfast' element = {<Breakfast cart={cart} setCart={setCart}></Breakfast>}></Route>
//               <Route path='/lunch' element = {<Lunch cart={cart} setCart={setCart}></Lunch>}></Route>
//               <Route path='/dinner' element = {<Dinner cart={cart} setCart={setCart}></Dinner>}></Route>
//               <Route path='/snacks' element = {<Snacks cart={cart} setCart={setCart}></Snacks>}></Route>
//               <Route path='/beverages' element = {<Beverages cart={cart} setCart={setCart}></Beverages>}></Route>
//               <Route path = '/slider' element = {<Slider cart = {cart} setCart ={setCart}></Slider>}></Route>
//               <Route path = '/product' element = {<ProductCarousel cart = {cart} setCart ={setCart}></ProductCarousel>}></Route>
//               <Route path = '/fanta' element = {<FantaWebsite cart = {cart} setCart ={setCart}></FantaWebsite>}></Route>
//               <Route path = '/auth' element = {<AuthComponent cart = {cart} setCart ={setCart}></AuthComponent>}></Route>
//               <Route path = '/sliderone' element = {<Sliderone cart = {cart} setCart ={setCart}></Sliderone>}></Route>
//               <Route path = '/breakfastslider' element = {<Breakfastslider cart = {cart} setCart ={setCart}></Breakfastslider>}></Route>
//               <Route path = '/lunchslider' element = {<Lunchslider cart = {cart} setCart ={setCart}></Lunchslider>}></Route>
//               <Route path = '/dinnerslider' element = {<Dinnerslider cart = {cart} setCart ={setCart}></Dinnerslider>}></Route>
//               <Route path = '/dinnerslider' element = {<Snacksslider cart = {cart} setCart ={setCart}></Snacksslider>}></Route>
//               <Route path = '/cartui' element = {<Cartui cart = {cart} setCart ={setCart}></Cartui>}></Route>
//               <Route path = '/solar' element = {<Solar cart = {cart} setCart ={setCart}></Solar>}></Route>
//               <Route path = '/products' element = {<Products cart = {cart} setCart ={setCart}></Products>}></Route>

       
//             </Routes>
//           </BrowserRouter>

//         </div>
//       </div>

//       )}
    


  
  
//     </div>
//   )
// }

// export default App






import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Shop from './Shop'
import Anothernav from './Anothernav'
import Cart from './Cart'
import Briyani from './Briyani'
import Pizza from "./Pizza"
import Noodles from "./Noodles"
import Paratha from "./Paratha"
import Shakes from "./Shakes"
import Chatitems from "./Chatitems"
import Signup from './Credential/Signup'
import Login from './Credential/Login'
import Breakfast from './Categories/Breakfast'
import Lunch from './Categories/Lunch'
import Dinner from './Categories/Dinner'
import Snacks from './Categories/Snacks'
import Beverages from './Categories/Beverages'
import Slider from './Slider'
import ProductCarousel from './ProductCarousel'
import FantaWebsite from './FantaWebsite'
import AuthComponent from './Credential/AuthComponent'
import Sliderone from './Sliderone'
import Breakfastslider from './Categories/Breakfastslider'
import Lunchslider from './Categories/Lunchslider'
import Dinnerslider from './Categories/Dinnerslider'
import Snacksslider from './Categories/Snacksslider'
import Cartui from './Cartui'
import Solar from './Solar'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import Products from './Products'
import SmoothWrapper from './SmoothWrapper'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ✅ Put your GSAP + location logic in a child component
function AppRoutes({ cart, setCart }) {
  const location = useLocation();

  useEffect(() => {
    if (ScrollSmoother.get()) {
      ScrollSmoother.get().kill();
    }

      if (location.pathname !== "/anothernav") {
        ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 3,
          effects: true,
        });
      }

      return ()=>{
        if(ScrollSmoother.get()){
          ScrollSmoother.get().kill()
        }
      }
  }, [location.pathname]);

  return (
    <div className="box">
      {location.pathname === "/anothernav" ? (
        <Routes>
          <Route path="/anothernav" element={<Anothernav cart={cart} setCart={setCart} />} />
        </Routes>
      ) : (

        <SmoothWrapper>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/navbar" element={<Navbar cart={cart} setCart={setCart} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/briyani" element={<Briyani cart={cart} setCart={setCart} />} />
            <Route path="/pizza" element={<Pizza cart={cart} setCart={setCart} />} />
            <Route path="/noodles" element={<Noodles cart={cart} setCart={setCart} />} />
            <Route path="/paratha" element={<Paratha cart={cart} setCart={setCart} />} />
            <Route path="/shakes" element={<Shakes cart={cart} setCart={setCart} />} />
            <Route path="/chatitems" element={<Chatitems cart={cart} setCart={setCart} />} />
            <Route path="/breakfast" element={<Breakfast cart={cart} setCart={setCart} />} />
            <Route path="/lunch" element={<Lunch cart={cart} setCart={setCart} />} />
            <Route path="/dinner" element={<Dinner cart={cart} setCart={setCart} />} />
            <Route path="/snacks" element={<Snacks cart={cart} setCart={setCart} />} />
            <Route path="/beverages" element={<Beverages cart={cart} setCart={setCart} />} />
            <Route path="/slider" element={<Slider cart={cart} setCart={setCart} />} />
            <Route path="/product" element={<ProductCarousel cart={cart} setCart={setCart} />} />
            <Route path="/fanta" element={<FantaWebsite cart={cart} setCart={setCart} />} />
            <Route path="/auth" element={<AuthComponent cart={cart} setCart={setCart} />} />
            <Route path="/sliderone" element={<Sliderone cart={cart} setCart={setCart} />} />
            <Route path="/breakfastslider" element={<Breakfastslider cart={cart} setCart={setCart} />} />
            <Route path="/lunchslider" element={<Lunchslider cart={cart} setCart={setCart} />} />
            <Route path="/dinnerslider" element={<Dinnerslider cart={cart} setCart={setCart} />} />
            <Route path="/snacksslider" element={<Snacksslider cart={cart} setCart={setCart} />} />
            <Route path="/cartui" element={<Cartui cart={cart} setCart={setCart} />} />
            <Route path="/solar" element={<Solar cart={cart} setCart={setCart} />} />
            <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
          </Routes>
          
        </SmoothWrapper>
        
       
      )}
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <AppRoutes cart={cart} setCart={setCart} />
    </BrowserRouter>
  );
}

export default App;







