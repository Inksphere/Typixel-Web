// js/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbP3CMLkof60jmzsk45oeLNhXwET_QTpo",
  authDomain: "typixel-16213.firebaseapp.com",
  projectId: "typixel-16213",
  storageBucket: "typixel-16213.firebasestorage.app",
  messagingSenderId: "734059256774",
  appId: "1:734059256774:web:db94a7822761b183e030c7",
  measurementId: "G-YGMNB4Z82V"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
