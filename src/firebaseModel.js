import { initializeApp } from "firebase/app";
import { firebaseConfig } from "/src/firebaseConfig.js";
import { getDatabase, ref, set, get } from "firebase/database";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { UserModel } from "./UserModel";

// Initialise firebase app, database, ref
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const PATH = "testData";
const srcRef = ref(db, PATH);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    UserModel.setCurrentUser(user);
    readFromFirebase(UserModel);
  } else {
    // UserModel.resetSetting(user);
  }
});

//provider
const provider = new GoogleAuthProvider();

export function testFirebase() {
  set(srcRef, "test");
}

function doLogin(model) {
  signInWithPopup(auth, provider)
    .then((result) => {
      model.setCurrentUser(result.user);
      readFromFirebase(model);
      console.log(model.currentUser);
      window.location.hash = "#/Translate";
    })
    .catch((error) => {
      console.log(error);
    });
}

function doLogout(model) {
  if (model.currentUser) {
    signOut(auth).then(() => {
      model.setCurrentUser(null);
      model.resetSetting(false);
    });
    UserModel.resetSetting();
    window.location.hash = "#/";
  }
}

function isLogin(model) {
  return model.currentUser;
}

function modelToPersistence(userModel) {
  if (isLogin(userModel)) {
    const data = userModel.currentHistory;
    const email = userModel.currentUser.email;
    return {
      hist: data,
      email: email,
      uid: userModel.currentUser.uid,
    };
  }
}

function saveToFirebase(model) {
  if (isLogin(model)) {
    set(ref(db, "users/" + model.currentUser.uid), modelToPersistence(model));
  }
}

function persistenceToModel(userData, model) {
  if (userData && isLogin(model)) {
    var hist = [];
    if (userData.hist) {
      hist = userData.hist;
      model.setCurrentHistory(hist);
    }
  } else {
    model.setCurrentHistoryIndex(null);
    model.resetSetting(userData);
  }
}

function readFromFirebase(model) {
  if (isLogin(model)) {
    const src = ref(db, "users/" + model.currentUser.uid);
    return get(src)
      .then((snapshot) => {
        return persistenceToModel(snapshot.val(), model);
      })
      .then(() => {
        model.ready = true;
      });
  }
}

export {
  modelToPersistence,
  persistenceToModel,
  saveToFirebase,
  readFromFirebase,
  doLogin,
  isLogin,
  doLogout,
};
