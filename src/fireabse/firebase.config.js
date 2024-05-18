// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDoXI_1P5N3eBsMyyOlYCtrmRDZcEE0tFk',
  authDomain: 'coffee-emporium-auth.firebaseapp.com',
  projectId: 'coffee-emporium-auth',
  storageBucket: 'coffee-emporium-auth.appspot.com',
  messagingSenderId: '693812264475',
  appId: '1:693812264475:web:b87dcbc4aaead596cfc2be',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
