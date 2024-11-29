// import { initializeApp } from "firebase/app";
//    import { getAuth } from "firebase/auth";

//    const firebaseConfig = {
//      apiKey: "YOUR_API_KEY",
//      authDomain: "YOUR_AUTH_DOMAIN",
//      projectId: "YOUR_PROJECT_ID",
//      storageBucket: "YOUR_STORAGE_BUCKET",
//      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//      appId: "YOUR_APP_ID",
//    };

//    const app = initializeApp(firebaseConfig);
//    export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN8iQIASXlzdshbyYbtNsLwYvPukzMF38",
  authDomain: "rbacwebapp.firebaseapp.com",
  projectId: "rbacwebapp",
  storageBucket: "rbacwebapp.firebasestorage.app",
  messagingSenderId: "914575898937",
  appId: "1:914575898937:web:b49398b442434da8af10e8",
  measurementId: "G-3VLNWCXQYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);