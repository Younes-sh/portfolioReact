// import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './MenuBurger.css'
const MenuBurger = () => {
  
 

  return (
   
    <div className='Menu'>
        <Menu >
            <div className='container-menu'>
                <ul>
                    <li className="menu-item">
                        <Link style={{color:'white'}} to='/'>Home</Link>
                    </li>
                    <li className="menu-item">
                        <Link style={{color:'white'}} to='/contact'>Contact</Link>
                    </li>
                    <li className="menu-item">
                        <Link style={{color:'white'}} to='/projects'>Projects</Link>
                    </li>
                </ul>
             </div>
        </Menu>
    
    </div>

  )
}

export default MenuBurger