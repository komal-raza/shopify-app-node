import React from 'react'
import { NavLink } from 'react-router-dom'

export const TopBar = () => {
  return (
    <div className='topbar-section'>
        <div className="logo-block">
            <img src="../assets/logo.png" alt="logo" style={{height:27, width:28}} />
            <h1 className='text-bold '>.Perfume</h1>
            <NavLink to="/">Sales</NavLink>
            <NavLink to="/product">Products</NavLink>
        </div>
    </div>
  )
}
