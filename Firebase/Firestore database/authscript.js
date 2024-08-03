// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1F9aMTvK372TJqxobsaYDZKBo-WaAH-k",
  authDomain: "first-project-c31f2.firebaseapp.com",
  databaseURL: "https://first-project-c31f2-default-rtdb.firebaseio.com",
  projectId: "first-project-c31f2",
  storageBucket: "first-project-c31f2.appspot.com",
  messagingSenderId: "271975702204",
  appId: "1:271975702204:web:9a080d5df4c7c7e6e87ab9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function createAcc() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
}

async function signIn() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
}

async function signOutUser() {
  try {
    await signOut(auth);
    location.href = "register.html";
  } catch (error) {
    console.log(error);
  }
}

window.signOutUser = signOutUser;
window.createAcc = createAcc;
window.signIn = signIn;
