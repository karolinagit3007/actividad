

import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDoXKPr9FBhYsY9-_L6Vw4uFiE4Ku8wLJo",
  authDomain: "appii-7f1ee.firebaseapp.com",
  databaseURL: "https://appii-7f1ee-default-rtdb.firebaseio.com",
  projectId: "appii-7f1ee",
  storageBucket: "appii-7f1ee.appspot.com",
  messagingSenderId: "861392327622",
  appId: "1:861392327622:web:6633962a3b2852b600d8c7",
  measurementId: "G-HQ1JDENTEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

