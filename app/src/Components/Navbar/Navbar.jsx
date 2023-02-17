// import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import './navbar.css'


const Navbar = () => {

 

  return (
    <div className='Navbar'>
        <div className='container-menu'>
            <button className='menu-button'>Open</button>
            <ul>
                <li>
                    <Link style={{color:'white'}} to='/'>Home</Link>
                </li>
                <li>
                    <Link style={{color:'white'}} to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link style={{color:'white'}} to='/projects'>Projects</Link>
                </li>
            </ul>
        </div>
        <div className='LangNav'>

        </div>
    </div>
  )
}

export default Navbar