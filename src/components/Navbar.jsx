import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div id='logo'>
        <img src="./src/WhatsApp Image 2024-05-06 at 22.41.27_e4a31521.jpg" alt="logo" width={50} />
      <h2>Dish Delight</h2>
      </div>
      <Link to={"/"}>

      Home  </Link>
    </nav>
  )
}

export default Navbar