import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
const Navbar = () => {
    const {user} =useContext()
  return (
    <nav>
      <div className="navhead"></div>
      <div className="nav-list">
        <Link><button></button></Link>
      </div>
    </nav>
  )
}

export default Navbar
