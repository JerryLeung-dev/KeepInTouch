# KeepInTouch
Live demo: https://keep-in-touch-43608.web.app/

The project runs on nodejs. Make sure you install nodejs (version 16.x) https://nodejs.org/en/.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

TECH STACK
- Front end: Angular
- UI library: Antd Design
- Deployed on Firebase

FEATURES
- Display a list of contacts (mockup data: https://jsonplaceholder.typicode.com/users)
- Clicking into each contact displays detailed contact information
- Toggle day/night mode
- Responsive layout

//INSTRUCTION
INSTALL DEPENDENCIES:
- npm install 

RUN
- npm run start
  
BUILD AND DEPLOY 

- Go to Firebase and create an account or use your existing account (https://firebase.google.com/)
- Create a project on Firebase
- Install Firebase CLI (https://firebase.google.com/docs/cli?authuser=0)
- In your command prompt, run firebase login
- Follow the steps:
  + Choosing hosting service
  + public directory: dist/keep-in-touch
  + No Github Acions deploy
- Delete dist folder in the project
- ng build (production build)
- firebase deploy
 
