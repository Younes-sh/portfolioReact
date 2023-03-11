import {Link ,NavLink} from 'react-router-dom';
import './navbar.css'
import SelectLanguage from '../Language/SelectLanguage';
import MenuBurger from '../MenuBurger/MenuBurger'
const Navbar = () => {

  return (
    <div className='Navbar'>
        <div className="container">
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
                          <li>
                            <NavLink  to='/about'><span >About</span></NavLink>
                          </li>
                      </ul>
          </div>
          {/*  */}
          <div className='nav-language'>
            <SelectLanguage />
          </div>
        </div>
    </div>
  )
}

export default Navbar