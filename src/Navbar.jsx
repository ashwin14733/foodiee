  //   import React, { useState } from 'react'
  //   import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom'
  //   import Cart from './Cart'

  //   const Navbar = () => {
  //     const navigate = useNavigate()
  //     const location = useLocation()
  //     const [searchitems,setSearchitems] = useState('')

  //     const handlesearch = (e)=>{
  //       e.preventDefault();

  //       if (searchitems.trim()) {
  //         const currentpath = location.pathname;

  //         if(['/shop','/chatitems','/noodles', '/paratha','/pizza','/shakes','/briyani'].includes(currentpath)){
  //           navigate(currentpath,{state:{searchitems}})
  //           console.log(searchitems);
            
  //         }
  //         else{
  //           navigate('/shop',{state : {searchitems}})
  //         }
          
  //       }

  //       // navigate('/shop',{state : {searchitems}})
  //       // navigate('/chatitems', {state:{searchitems}})
  //       // navigate('/noodles', {state:{searchitems}})
  //       // navigate('/paratha', {state:{searchitems}})
  //       // navigate('/pizza', {state:{searchitems}})
  //       // navigate('/shakes', {state:{searchitems}})
  //       // navigate('/briyani', {state:{searchitems}})


  //     }


  //      const categorychange = (e)=>{
  //   // e.preventDefault();
  //   const selectedcategory = e.target.value;

  //   switch(selectedcategory){
  //     case 'Breakfast':
  //       navigate('/breakfast')
  //       break;
  //     case 'Lunch':
  //       navigate('/lunch')
  //       break; 
  //     case 'Dinner':
  //       navigate('/dinner')
  //       break; 
  //     case 'Snacks':
  //       navigate('/snacks')
  //       break; 
  //     case 'Beverages':
  //       navigate('/beverages')
  //       break;
  //     default:
  //       navigate('/shop')
  //       break;
  //   }
  // }

      


  //     return (
  //       <div>
  //         {/* <Link to='/'>Home</Link>
  //           <Link to='/about'>About</Link>
  //           <Link to='/shop'>Shop</Link>

  //         <Outlet></Outlet> */}
  //         <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  //     <div class="container">
  //       <a class="navbar-brand fs-3" href="/home" style={{color:"orange"}}  >Foodiee</a>
  //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //         <span class="navbar-toggler-icon"></span>
  //       </button>
  //       <div class="collapse navbar-collapse" id="navbarSupportedContent">
  //         <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
  //           <li class="nav-item">
  //             <Link to='/home' class="nav-link active ms-5 ">Home</Link>
            
  //           </li>
  //           <li class="nav-item">
  //             <Link to='/shop' class="nav-link active" >Shop</Link>
  //           </li>
  //           <li class="nav-item dropdown">
  //             <Link to='/cart' class="nav-link active" >Cart</Link>
  //           </li>
          
  //         </ul>
  //         <form class="d-flex" role="search" onSubmit={handlesearch}>
  //           <input class="form-control me-2" value={searchitems} type="search" id='searchvalue' placeholder="Search your Foods" aria-label="Search" onChange={(e)=>{setSearchitems(e.target.value)}}/>
  //           <button class="btn btn-outline-warning" type="submit" style={{color:"white" ,border:'2px solid gray',borderRadius:"10px"}}>Search</button>
  //         </form>
  //         <div>
  //           <select name="category" id="category" style={{marginTop: "100px"}} onChange={categorychange}>
  //               <option value="Select Your Category" >Select Your Category</option>
  //               <option value="Breakfast">Breakfast </option>
  //               <option value="Lunch">Lunch</option>
  //               <option value="Dinner">Dinner</option>
  //               <option value="Snacks">Snacks</option>
  //               <option value="Beverages">Beverages</option>
  //             </select>
  //         </div>
              
  //       </div>
  //     </div>
  //   </nav>
  //   <Outlet></Outlet>

      
    
          
  //       </div>
  //     )
  //   }

  //   export default Navbar





// duplicate navbar

// import React, { useState } from 'react'
// import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom'
// import Cart from './Cart'

// const Navbar = () => {
//   const navigate = useNavigate()
//   const location = useLocation()
//   const [searchitems, setSearchitems] = useState('')

//   const handlesearch = (e) => {
//     e.preventDefault()
//     if (searchitems.trim()) {
//       const currentpath = location.pathname
//       if (
//         [
//           '/shop',
//           '/chatitems',
//           '/noodles',
//           '/paratha',
//           '/pizza',
//           '/shakes',
//           '/briyani',
//         ].includes(currentpath)
//       ) {
//         navigate(currentpath, { state: { searchitems } })
//         console.log(searchitems)
//       } else {
//         navigate('/shop', { state: { searchitems } })
//       }
//     }
//   }

//   const categorychange = (e) => {
//     const selectedcategory = e.target.value
//     switch (selectedcategory) {
//       case 'Breakfast':
//         navigate('/breakfast')
//         break
//       case 'Lunch':
//         navigate('/lunch')
//         break
//       case 'Dinner':
//         navigate('/dinner')
//         break
//       case 'Snacks':
//         navigate('/snacks')
//         break
//       case 'Beverages':
//         navigate('/beverages')
//         break
//       default:
//         navigate('/shop')
//         break
//     }
//   }

//   return (
//     <div>
//       <nav
//         className="navbar navbar-expand-lg fixed-top"
//         style={{
//           background: 'rgba(255, 255, 255, 0.1)', // glass effect
//           backdropFilter: 'blur(10px)',
//           boxShadow: '0px 4px 20px #ffc107', // glowing box shadow
//         }}
//       >
//         <div className="container">
//           <a
//             className="navbar-brand fs-3"
//             href="/home"
//             style={{ color: 'orange', fontWeight: 'bold' }}
//           >
//             Foodiee
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
//               <li className="nav-item">
//                 <Link to="/home" className="nav-link active ms-5 text-light">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/shop" className="nav-link active text-light">
//                   Shop
//                 </Link>
//               </li>
//               <li className="nav-item dropdown">
//                 <Link to="/cart" className="nav-link active text-light">
//                   Cart
//                 </Link>
//               </li>
//             </ul>

//             {/* Search Bar with Neon Border */}
//             <form className="d-flex" role="search" onSubmit={handlesearch}>
//               <input
//                 className="form-control me-2"
//                 value={searchitems}
//                 type="search"
//                 id="searchvalue"
//                 placeholder="Search your Foods"
//                 aria-label="Search"
//                 onChange={(e) => {
//                   setSearchitems(e.target.value)
//                 }}
//                 style={{
//                   border: '2px solid #0ff', // neon cyan
//                   borderRadius: '10px',
//                   background: 'rgba(0,0,0,0.3)',
//                   color: '#fff',
//                   boxShadow: '0 0 10px #0ff, 0 0 20px #0ff',
//                 }}
//               />
//               <button
//                 className="btn"
//                 type="submit"
//                 style={{
//                   color: 'white',
//                   background: '#ffc107',
//                   borderRadius: '10px',
//                   fontWeight: 'bold',
//                   boxShadow: '0px 0px 10px #ffc107',
//                 }}
//               >
//                 Search
//               </button>
//             </form>

//             {/* Category Dropdown */}
//             <div>
//               <select
//                 name="category"
//                 id="category"
//                 style={{
//                   marginTop: '100px',
//                   borderRadius: '10px',
//                   padding: '5px',
//                   background: 'rgba(255, 255, 255, 0.2)',
//                   color: '#000',
//                   fontWeight: '500',
//                   border: '1px solid #ffc107',
//                   boxShadow: '0 0 10px #ffc107',
//                 }}
//                 onChange={categorychange}
//               >
//                 <option value="Select Your Category">
//                   Select Your Category
//                 </option>
//                 <option value="Breakfast">Breakfast</option>
//                 <option value="Lunch">Lunch</option>
//                 <option value="Dinner">Dinner</option>
//                 <option value="Snacks">Snacks</option>
//                 <option value="Beverages">Beverages</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <Outlet></Outlet>
//     </div>
//   )
// }

// export default Navbar




import React, { useState } from 'react'
import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom'
import car from './images/cart.png'

const Navbar = (cart,setCart) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchitems, setSearchitems] = useState('')

  const handlesearch = (e) => {
    e.preventDefault()
    if (searchitems.trim()) {
      const currentpath = location.pathname
      if (
        [
          '/shop',
          '/chatitems',
          '/noodles',
          '/paratha',
          '/pizza',
          '/shakes',
          '/briyani',
        ].includes(currentpath)
      ) {
        navigate(currentpath, { state: { searchitems } })
      } else {
        navigate('/shop', { state: { searchitems } })
      }
    }
  }

  const categorychange = (e) => {
    const selectedcategory = e.target.value
    switch (selectedcategory) {
      case 'Breakfast':
        navigate('/breakfast')
        break
      case 'Lunch':
        navigate('/lunch')
        break
      case 'Dinner':
        navigate('/dinner')
        break
      case 'Snacks':
        navigate('/snacks')
        break
      case 'Beverages':
        navigate('/beverages')
        break
      default:
        navigate('/shop')
        break
    }
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          background: 'rgba(255, 255, 255, 0.1)', // glass effect
          backdropFilter: 'blur(10px)',
          boxShadow: '0px 4px 20px #ffc107', // glowing box shadow
          // width:"90%",
          // marginLeft:"auto",
          // marginRight:"auto",
          // justifyContent:"space-around",
          // position:'sticky',
          // top:'100',
          // zIndex:'1000',
          // width:"100%"
          padding:"0px"
        }}
      >
        <div className="container-fluid">
          {/* Brand */}
          <a
            className="navbar-brand fs-3"
            href="/home"
            style={{ color: 'orange', fontWeight: '400' }}
          >
            <img src="https://fooodiee.com/web/assets/web_logo-CbpPhD7S.jpg" alt="" style={{width:"13%"}}/>
          </a>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar content */}
          <div className="collapse navbar-collapse" id="navbarContent">
            {/* Left side - Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-3">
              <li className="nav-item">
                <Link to="/home" className="nav-link text-light">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link text-light">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link text-light">
                  Cart
                </Link>
              </li>
            </ul>

            {/* Right side - Search + Category */}
            <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3">
              <form
                className="d-flex mb-2 mb-lg-0"
                role="search"
                onSubmit={handlesearch}
              >
                <input
                  className="form-control me-2"
                  value={searchitems}
                  type="search"
                  placeholder="Search your Foods"
                  aria-label="Search"
                  onChange={(e) => setSearchitems(e.target.value)}
                  style={{
                    // border: '2px solid #0ff', // neon cyan
                    borderRadius: '10px',
                    // background: 'rgba(0,0,0,0.3)',
                    color: '#fff',
                    // boxShadow: '0 0 10px #0ff, 0 0 20px #0ff',
                  }}
                />
                <button
                  className="btn"
                  type="submit"
                  style={{
                    color: 'white',
                    background: '#ffc107',
                    borderRadius: '10px',
                    fontWeight: '500',
                    // boxShadow: '0px 0px 10px #ffc107',
                  }}
                >
                  <i className="fa-solid fa-magnifying-glass" style={{color:"black"}}></i>
                </button>
              </form>

              <select
                name="category"
                id="category"
                className='selectcategory'
                style={{
                  borderRadius: '10px',
                  padding: '5px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  fontWeight: '400',
                  // border: '1px solid #ffc107',
                  // boxShadow: '0 0 10px #ffc107',
                  outline: "none"
                }}
                onChange={categorychange}
              >
                <option value="Select Your Category">Select Your Category</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snacks">Snacks</option>
                <option value="Beverages">Beverages</option>
              </select>
            </div>
          </div>
            <Link to= '/cart'><img src={car} alt="carticon" className='carticon' />
            <h3 className='cartcountbtn'>{cart.length}</h3></Link>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar


















// import React, { useState } from 'react'
// import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom'

// const Navbar = () => {
//   const navigate = useNavigate()
//   const location = useLocation()
//   const [searchitems, setSearchitems] = useState('')

//   const handlesearch = (e) => {
//     e.preventDefault()
//     if (searchitems.trim()) {
//       const currentpath = location.pathname
//       if (
//         [
//           '/shop',
//           '/chatitems',
//           '/noodles',
//           '/paratha',
//           '/pizza',
//           '/shakes',
//           '/briyani',
//         ].includes(currentpath)
//       ) {
//         navigate(currentpath, { state: { searchitems } })
//       } else {
//         navigate('/shop', { state: { searchitems } })
//       }
//     }
//   }

//   const categorychange = (e) => {
//     const selectedcategory = e.target.value
//     switch (selectedcategory) {
//       case 'Breakfast':
//         navigate('/breakfast')
//         break
//       case 'Lunch':
//         navigate('/lunch')
//         break
//       case 'Dinner':
//         navigate('/dinner')
//         break
//       case 'Snacks':
//         navigate('/snacks')
//         break
//       case 'Beverages':
//         navigate('/beverages')
//         break
//       default:
//         navigate('/shop')
//         break
//     }
//   }

//   return (
//     <div>
//       <nav
//         className="navbar navbar-expand-lg"
//         style={{
//           background: 'rgba(255, 255, 255, 0.1)', // glass effect
//           backdropFilter: 'blur(10px)',
//           boxShadow: '0px 4px 20px #ffc107', // glowing box shadow
//           // width:"90%",
//           // marginLeft:"auto",
//           // marginRight:"auto",
//           // justifyContent:"space-around",
//           // position:'sticky',
//           // top:'100',
//           // zIndex:'1000',
//           // width:"100%"
//         }}
//       >
//         <div className="container-fluid">
//           {/* Brand */}
//           <a
//             className="navbar-brand fs-3"
//             href="/home"
//             style={{ color: 'orange', fontWeight: '400' }}
//           >
//             <img src="https://fooodiee.com/web/assets/web_logo-CbpPhD7S.jpg" alt="" style={{width:"13%"}}/>
//           </a>

//           {/* Toggler for mobile */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarContent"
//             aria-controls="navbarContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Navbar content */}
//           <div className="collapse navbar-collapse" id="navbarContent">
//             {/* Left side - Links */}
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-3">
//               <li className="nav-item">
//                 <Link to="/home" className="nav-link text-light">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/shop" className="nav-link text-light">
//                   Shop
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/cart" className="nav-link text-light">
//                   Cart
//                 </Link>
//               </li>
//             </ul>

//             {/* Right side - Search + Category */}
//             <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-3">
//               <form
//                 className="d-flex mb-2 mb-lg-0"
//                 role="search"
//                 onSubmit={handlesearch}
//               >
//                 <input
//                   className="form-control me-2"
//                   value={searchitems}
//                   type="search"
//                   placeholder="Search your Foods"
//                   aria-label="Search"
//                   onChange={(e) => setSearchitems(e.target.value)}
//                   style={{
//                     // border: '2px solid #0ff', // neon cyan
//                     borderRadius: '10px',
//                     // background: 'rgba(0,0,0,0.3)',
//                     color: '#fff',
//                     // boxShadow: '0 0 10px #0ff, 0 0 20px #0ff',
//                   }}
//                 />
//                 <button
//                   className="btn"
//                   type="submit"
//                   style={{
//                     color: 'white',
//                     background: '#ffc107',
//                     borderRadius: '10px',
//                     fontWeight: '500',
//                     // boxShadow: '0px 0px 10px #ffc107',
//                   }}
//                 >
//                   Search
//                 </button>
//               </form>

//               <select
//                 name="category"
//                 id="category"
//                 className='selectcategory'
//                 style={{
//                   borderRadius: '10px',
//                   padding: '5px',
//                   background: 'rgba(255, 255, 255, 0.2)',
//                   color: '#fff',
//                   fontWeight: '400',
//                   // border: '1px solid #ffc107',
//                   // boxShadow: '0 0 10px #ffc107',
//                   outline: "none"
//                 }}
//                 onChange={categorychange}
//               >
//                 <option value="Select Your Category">Select Your Category</option>
//                 <option value="Breakfast">Breakfast</option>
//                 <option value="Lunch">Lunch</option>
//                 <option value="Dinner">Dinner</option>
//                 <option value="Snacks">Snacks</option>
//                 <option value="Beverages">Beverages</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <Outlet />
//     </div>
//   )
// }

// export default Navbar

