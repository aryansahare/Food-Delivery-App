import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {

  const[menu,setMenu]=useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className='navbar-menu'>
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>home</li>
        <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>contact us</li>
      </ul>
      <div className='navbar-right'>
        <img src= {assets.search_icon} alt=""/>
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt=""/>
          <div className='dot'></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
