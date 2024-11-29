import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDCN4WXm8znZnOV-OO6Y4_pR0RwlCW1T4",
  authDomain: "testing-508a9.firebaseapp.com",
  projectId: "testing-508a9",
  storageBucket: "testing-508a9.firebasestorage.app",
  messagingSenderId: "61238413530",
  appId: "1:61238413530:web:0877f332a9b212654a7de3",
  measurementId: "G-WDD2JL75M2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);