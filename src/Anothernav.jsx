import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Anothernav = () => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/shop'>Shop</Link>

      <Outlet></Outlet>
    </div>
  )
}

export default Anothernav
