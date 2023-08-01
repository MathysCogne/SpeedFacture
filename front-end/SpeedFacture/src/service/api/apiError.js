export const handleApiError = (error) => {
   if (error.response) {
      console.error('Erreur de réponse:', error.response.status);
      console.error(error.response.data);
      console.error(error.response.headers);
      throw new Error('Une erreur de réponse s\'est produite.');
   } else if (error.request) {
      console.error('Pas de réponse reçue:', error.request);
      throw new Error('Pas de réponse reçue. Veuillez vérifier votre connexion internet.');
   } else {
      console.error('Erreur lors de la configuration de la requête:', error.message);
      throw new Error('Une erreur s\'est produite lors de la configuration de la requête.');
   }
};