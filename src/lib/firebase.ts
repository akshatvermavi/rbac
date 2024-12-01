import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAN8iQIASXlzdshbyYbtNsLwYvPukzMF38",
  authDomain: "rbacwebapp.firebaseapp.com",
  projectId: "rbacwebapp",
  storageBucket: "rbacwebapp.firebasestorage.app",
  messagingSenderId: "914575898937",
  appId: "1:914575898937:web:b49398b442434da8af10e8",
  measurementId: "G-3VLNWCXQYG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);