import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHv9ipa3ZuFDrxwoZpAl8SUQF251BRN5I",
  authDomain: "kravings-6b168.firebaseapp.com",
  projectId: "kravings-6b168",
  storageBucket: "kravings-6b168.firebasestorage.app",
  messagingSenderId: "587560991063",
  appId: "1:587560991063:web:a4bd1562b74b5b00242612"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and export it
export const db = getFirestore(app);