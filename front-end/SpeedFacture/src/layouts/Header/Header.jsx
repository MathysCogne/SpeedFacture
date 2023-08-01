import { NavLink } from 'react-router-dom';
import './header.scss'

import User from '../../components/User/User'

function Header() {
   return (
      <header>
         <div className='header__cont'>
            <h1><NavLink to="/">Speed Facture</NavLink></h1>
            
            <nav>
               < User />
            </nav>
         </div>
      </header>
   )
}
export default Header;