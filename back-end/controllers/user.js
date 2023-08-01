const bcrypt = require('bcrypt'); // on importe le package bcrypt pour le hashage du mot de passe
const User = require('../models/user');
const jwt = require('jsonwebtoken'); // on importe le package jsonwebtoken pour attribuer un token à un utilisateur au moment de la connexion

exports.signup = (req, res, next) => {
   bcrypt.hash(req.body.password, 10)
     .then(hash => {
      const user = new User({
         username: req.body.username,
         telephone: req.body.telephone,
         email: req.body.email,
         password: hash
      });
      user.save()
         .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
         .catch(error => res.status(400).json({ error }));
     })
     .catch(error => res.status(500).json({ error }));
};
 

exports.login = (req, res, next) => {
   User.findOne({ email: req.body.email })
      .then(user => {
         if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé !' });
         }
         bcrypt.compare(req.body.password, user.password) // on utilise bcrypt pour comparer le mot de passe entré par l'utilisateur avec le hash enregistré dans la base de données
            .then(valid => {
               if (!valid) {
                  return res.status(401).json({ error: 'Mot de passe incorrect !' });
               }
               res.status(200).json({
                  userId: user._id,
                  token: jwt.sign( // on renvoie un token d'authentification à l'utilisateur avec jsonwebtoken. Ce token contient l'ID de l'utilisateur en tant que payload (les données encodées dans le token) et utilise une chaîne secrète de développement temporaire RANDOM_TOKEN_SECRET pour encoder notre token (à remplacer par une chaîne aléatoire beaucoup plus longue pour la production)
                     { userId: user._id },
                     'RANDOM_TOKEN_SECRET', // à remplacer par une chaîne aléatoire beaucoup plus longue pour la production comme par exemple une variable d'environnement (process.env.TOKEN) pour ne pas laisser la chaîne en clair dans le code source de l'application (et donc dans le gestionnaire de version) 
                     { expiresIn: '12h' }
                  ),
                  username: user.username,
                  telephone: user.telephone,
                  email: user.email
               });
            })
            .catch(error => res.status(500).json({ error }));
       })
       .catch(error => res.status(500).json({ error }));
};