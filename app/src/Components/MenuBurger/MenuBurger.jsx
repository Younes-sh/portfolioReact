// import React,{useState,useEffect} from 'react'
import {Link , NavLink} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './MenuBurger.css'
const MenuBurger = () => {
  
 

  return (
   
    <div className='Menu'>
        <Menu >
            <div className='container-menu'>
                <ul>
                    <li className="menu-item">
                        <NavLink style={{color:'white'}} to='/'>Home</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink style={{color:'white'}} to='/contact'>Contact</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink style={{color:'white'}} to='/projects'>Projects</NavLink>
                    </li>
                </ul>
             </div>
        </Menu>
    
    </div>

  )
}

export default MenuBurger