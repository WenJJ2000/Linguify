# Linguify
This app will allow you to translate different languages with the power of Google Translate and see your past translations

# How to use 
clone the repo to your local
`git clone <link>`

Navigate to your folder and install dependencies
`npm install`

Run the app
`npm run dev`


# What Was Done
We included the main translation api as well as the persistence to firebase and authentication. You will be able to login to different accounts to see the translation done on ur account. 

# Future Plans

Included loading into the app as well as better redirect

# File Structure 

```
├── src
│ ├── components #stores all the components needed
| ├── images # images use for front end
│ ├── views # the Views used
│ ├── testData # Stores data files used for testing api
| ├── presenter # Presenter for each view
│ ├── UserModel.js # Stores the user data 
│ ├── index.jsx 
| ├── apiConfig.js
| ├── ReactRoot.jsx
| ├── FirebaseConfig.js
| ├── languagaeList.jsx # language to language code used
| ├── FirebaseModel.js # Has all firebase commands
| ├── style.css
├── dist
├── node_modules
├── package.json
├── package-lock.json
├── README.md
└── .gitignore

```
