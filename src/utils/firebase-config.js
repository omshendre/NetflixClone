import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBWN0agMGRNWtdaDXyy70FG_hRx6JP6UrU",
  authDomain: "react-netflix-clone-4240f.firebaseapp.com",
  projectId: "react-netflix-clone-4240f",
  storageBucket: "react-netflix-clone-4240f.appspot.com",
  messagingSenderId: "56795092024",
  appId: "1:56795092024:web:a4e858b86371810c7cc2cd",
  measurementId: "G-0FY8JK7MT0"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
