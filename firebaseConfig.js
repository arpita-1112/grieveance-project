// Import Firebase libraries
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase configuration (copied from your SDK snippet)
const firebaseConfig = {
  apiKey: "AIzaSyA4qpe6xYNuJLNsmYFagYYStRxaF17XEpw",
  authDomain: "grievancecell-1a079.firebaseapp.com",
  projectId: "grievancecell-1a079",
  storageBucket: "grievancecell-1a079.firebasestorage.app",
  messagingSenderId: "142371396567",
  appId: "1:142371396567:web:0c74451a55e7b654788992",
  measurementId: "G-4EZPF4S1Y3"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔹 Connect to Firestore Database
export const db = getFirestore(app);
