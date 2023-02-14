import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css'



const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='container-menu'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
            </ul>
        </div>
        <div className='LangNav'>

        </div>
    </div>
  )
}

export default Navbar