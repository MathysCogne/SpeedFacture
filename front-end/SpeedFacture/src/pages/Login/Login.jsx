import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { login } from '../../service/api/user';

import './login.scss'

function Login() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = (event) => {
      event.preventDefault();

      login(email, password)
         .then((response) => {
            console.log(response);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <main>
         <section className='login' >
            <h2>Connectez-vous, pour accéder à vos factures</h2>
            <p>Vous n&apos;avez pas de compte ? <NavLink to="/SignIn">Inscrivez-vous</NavLink></p>

            <form onSubmit={handleSubmit}>
               <label htmlFor="email">Email</label>
               <input type="email" name="email" id="email" onChange={(event) => setEmail(event.target.value)} />
               <label htmlFor="password">Mot de passe</label>
               <input type="password" name="password" id="password" onChange={(event) => setPassword(event.target.value)} />
               <button type="submit">Se connecter</button>
            </form>
         </section>
      </main>
   )
}

export default Login;