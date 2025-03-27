# NextJS

## Création du projet
### Commande
```
npm create next-app@latest
```
### Options choisi pour la démo
```
What is your project named? ........................................ demo-nextjs
Would you like to use TypeScript? .................................. No /(Yes)
Would you like to use ESLint? ...................................... (No) / Yes
Would you like to use Tailwind CSS? ................................ No / (Yes)
Would you like your code inside a `src/` directory? ................ No / (Yes)
Would you like to use App Router? (recommended) .................... No / (Yes)
Would you like to use Turbopack for `next dev`? .................... No / (Yes)
Would you like to customize the import alias (`@/*` by default)? ... (No) / Yes
```

## Thème de la démo
Gestion de sa bibliotheque de jeu vidéo
- Jeux vidéo 
 - Parcourir la liste des jeux
 - Ajouter, modifer et supprimer des jeux (Admin)
- Utilisateur
 - Connexion
 - Ajouter ou supprimer des jeux de sa collection

## Structure du site
### Routes
```
/                                   Accueil
/game                               Liste des jeux
/game/:gameId                       Detail d'un jeu
/profil/:profilId                   La page de l'utilisateur
/profil/:profilId/collection        La collection du jeu de l'utilisateur
/login                              Page pour se connecter
/signup                             Page pour créer son compte
/about                              A propos
```