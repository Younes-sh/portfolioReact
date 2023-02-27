import {Link} from 'react-router-dom';
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
                           <Link  to='/'><span >Home</span>  </Link>
                        </li>
                        <li>
                        <Link  to='/contact'><span >Contact</span></Link>
                        </li>
                        <li>
                        <Link  to='/projects'><span >Projects</span></Link>
                        </li>
                    </ul>
                 </div>
        <div className='LangNav'>
        </div>
    </div>
  )
}

export default Navbar