# Linguify
This app will allow you to translate different languages with the power of Google Translate and see your past translations

# How to use 
clone the repo to your local
`git clone <link>`

Navigate to your folder and install dependencies
`npm install`

Create your Config file in the src folder:

`firebaseConfig.js`
```
export const firebaseConfig = {
  COPY_FROM_FIREBASE
};
```

`apiConfig.js`
```
export const API_KEY = "GOOGLE_TRANSLATE_API_KEY";
export const API_HOST = "GOOGLE_TRANSLATE_HOST_LINK";
export const BASE_URL = "YOUR_HOST_URL"
```

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
