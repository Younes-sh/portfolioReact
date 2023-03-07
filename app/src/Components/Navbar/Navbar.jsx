import {Link ,NavLink} from 'react-router-dom';
import './navbar.css'
import MenuBurger from '../MenuBurger/MenuBurger'
const Navbar = () => {
    // let [color , setColor] = useState ()





  return (
    <div className='Navbar'>
        <MenuBurger />
        <div className='container-menu'>
                    <ul>
                        <li>
                           <NavLink  to='/'><span >Home</span>  </NavLink>
                        </li>
                        <li>
                        <NavLink  to='/contact'><span >Contact</span></NavLink>
                        </li>
                        <li>
                        <NavLink  to='/projects'><span >Projects</span></NavLink>
                        </li>
                    </ul>
                 </div>
        <div className='LangNav'>
        </div>
    </div>
  )
}

export default Navbar