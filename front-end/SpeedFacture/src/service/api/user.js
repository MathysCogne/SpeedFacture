import axios from 'axios';

// Gestion des erreurs mutialisées
import { handleApiError } from './apiError';

// URL de l'API
const API_URL = 'http://localhost:3000/api/auth';

export const signUp = (email, password, username, telephone) => {
   console.log( "email: " + email + " password: " + password + " telephone: " + telephone + " username: " + username);
   const data = {
      email: email,
      password: password,
      telephone: telephone,
      username: username
   };

   let config = {
      method: 'post',
      url: `${API_URL}/signup`,
      headers: {
         'Content-Type': 'application/json'
      },
      data: JSON.stringify(data)
   };
  
   return axios(config)
      .then(response => response.data)
      .catch(handleApiError);
};

export const login = (email, password) => {
   const data = {
      email: email,
      password: password
   };

   let config = {
      method: 'post',
      url: `${API_URL}/login`,
      headers: {
         'Content-Type': 'application/json'
      },
      data: JSON.stringify(data)
   };

   return axios(config)
      .then(response => response.data)
      .catch(handleApiError);
};