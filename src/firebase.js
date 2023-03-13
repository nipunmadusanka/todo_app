
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIdgD9kGZzptbPWyItMiwiO0uW7S2DJZI",
  authDomain: "todo-crud-b0dfc.firebaseapp.com",
  projectId: "todo-crud-b0dfc",
  storageBucket: "todo-crud-b0dfc.appspot.com",
  messagingSenderId: "853959160197",
  appId: "1:853959160197:web:c40960583dcc602de9d4ec",
  measurementId: "G-BD00CT3YW8"
  };


  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
