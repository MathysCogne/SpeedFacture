import axios from 'axios';

// Gestion des erreurs mutialisées
import { handleApiError } from './apiError';

// URL de l'API
const API_URL = 'http://localhost:3000/api/auth';

export const signUp = (email, password, telephone, username) => {
   const data = JSON.stringify({
      email: email,
      password: password,
      telephone: telephone,
      username: username
   });

   return axios.post(API_URL + '/signin', data)
      .then(response => response.data) 
      .catch(handleApiError); // Gestion des différentes erreurs
};

export const login = (email, password) => {
   const data = JSON.stringify({
      email: email,
      password: password
   });

   return axios.post(API_URL + '/signin', data)
      .then(response => response.data)
      .catch(handleApiError);
};

// const handleSubmit = (event) => {
//    event.preventDefault();
 
//    signUp(email, password, telephone, username)
//      .then(response => {
//        console.log(response.data);
//      })
//      .catch(error => {
//        console.error('Erreur lors de la connexion:', error);
//      });
//  };