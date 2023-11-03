# Argent Bank

# Utilisez une API pour un compte utilisateur bancaire avec React - Projet 13
https://github.com/CamilleStagiaire/Argent_bank.git

*Formation Développeur d'application - JavaScript React*

# Etapes
- Initialisation du projet:  

**installation et lancement du backend:**  
fork du repo existant  
git clone https://github.com/CamilleStagiaire/Project-13-ArgentBank.git  
npm run dev:server  
npm run populate-db

**Dossier argentbank:**  
npx create-react-app argentbank  
npm install --save-dev eslint-config-prettier   
npm install react-router-dom  
  
- Mise en place du front:  
page Home  
page SignIn  
page User  

- Installation des outils Redux:  
npm install react-redux  
npm install @reduxjs/toolkit  

- Mise en place du Store Redux, d'un local Storage et d'une gestion d'authentification pour accéder à la page User  

- Fichier ApiService pour les appels API:  
login pour une connexion au serveur avec l'email et le mot de passe  
getUserProfile pour obtenir le profil de l'utilisateur avec le token d'authentification  

- Intégration des informations de transaction:  
fichier data.json et composant Transactions  
mise en place du style avec les composants Collapse, ToggleButton et le fichier wireframes.css  

# Compétences évaluées:
- S'authentifier à une API  
- Implémenter un gestionnaire d'état dans une application React  
- Intéragir avec une API  
- Modéliser une API  