import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { signUp } from '../../service/api/user';

import './SignIn.scss'

function SignIn() {
   
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [username, setUsername] = useState('');
   const [telephone, setTelephone] = useState('');

   const handleSubmit = (event) => {
      event.preventDefault();

      signUp(email, password, username, telephone)
         .then((response) => {
            console.log(response);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <main>
         <section className='login SignIn' >
            <h2>Inscrivez-vous, pour créer simplement vos factures</h2>
            <p>Vous avez déjà un compte ? <NavLink to="/login">Connectez-vous</NavLink></p>

            <form onSubmit={handleSubmit}>
               <div className='SignIn__cont'>
                  <div>
                     <label htmlFor="email">Email</label>
                     <input type="email" name="email" id="email" onChange={(event) => setEmail(event.target.value)} />
                     <label htmlFor="password">Mot de passe</label>
                     <input type="password" name="password" id="password" onChange={(event) => setPassword(event.target.value)} />
                  </div>
                  <div>
                     <label htmlFor="username">Nom</label>
                     <input type="text" name="username" id="username" onChange={(event) => setUsername(event.target.value)} />

                     <label htmlFor="telephone">Téléphone</label>
                     <input type="tel" name="telephone" id="telephone" onChange={(event) => setTelephone(event.target.value)} />
                  </div>
               </div>
               <button type="submit">S&apos;inscrire</button>
            </form>
         </section>
      </main>
   )
}

export default SignIn;