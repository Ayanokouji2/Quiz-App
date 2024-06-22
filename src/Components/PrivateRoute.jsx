import React from 'react'
import { useContext } from 'react'
import AuthContext from '../context/auth.context'
import { Outlet,Navigate } from 'react-router-dom'
const PrivateRoute = () => {
    const {user}=useContext(AuthContext)

  return (
    user&&user.role=='admin'?<Outlet/>:<Navigate to="/login"/>
  )
}

export default PrivateRoute
