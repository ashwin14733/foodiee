import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/shop'>Shop</Link>

      <Outlet></Outlet> */}
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container">
    <a class="navbar-brand fs-3" href="/"  >Foodiee</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
        <li class="nav-item">
          <Link to='/' class="nav-link active ms-5 ps-5" >Home</Link>
         
        </li>
        <li class="nav-item">
          <Link to='/shop' class="nav-link active" >Shop</Link>
        </li>
        <li class="nav-item dropdown">
          <Link to='/cart' class="nav-link active" >Cart</Link>

          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-warning" type="submit" style={{color:"black" ,border:'2px solid gray',borderRadius:"10px"}}>Search</button>
      </form>
    </div>
  </div>
</nav>
<Outlet></Outlet>

  
 
      
    </div>
  )
}

export default Navbar
