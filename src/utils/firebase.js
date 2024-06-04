// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBtibg-KKq4aOEcosiCnjtGt1BPNWd8nis",
	authDomain: "netflix-gpt-e0f04.firebaseapp.com",
	projectId: "netflix-gpt-e0f04",
	storageBucket: "netflix-gpt-e0f04.appspot.com",
	messagingSenderId: "209949160481",
	appId: "1:209949160481:web:98163ba63b321c6dc59f60",
	measurementId: "G-4TRZBRZPC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();