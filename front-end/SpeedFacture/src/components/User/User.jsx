import { NavLink } from 'react-router-dom';

function User () {
   
   return (
      <ul>
         <NavLink to="/Login"><li>Login</li></NavLink>
         <NavLink to="/SignIn"><li className='SignIn'>Sign In</li></NavLink>
      </ul>
   )
}

export default User;