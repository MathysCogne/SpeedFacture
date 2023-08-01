import { NavLink } from 'react-router-dom';
import './header.scss'

function Header() {
   return (
      <header>
         <h1><NavLink to="/">Speed Facture</NavLink></h1>
         
         <nav>
            <ul>
               <NavLink to="/Login"><li>Login</li></NavLink>
               <NavLink to="/Login"><li className='SignIn'>Sign In</li></NavLink>
            </ul>
         </nav>

      </header>
   )
}
export default Header;