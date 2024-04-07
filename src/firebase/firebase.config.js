// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAs0pwzYIjVXkvO46-c77u0p-BzkHQufQg',
  authDomain: 'auth-context-13589.firebaseapp.com',
  projectId: 'auth-context-13589',
  storageBucket: 'auth-context-13589.appspot.com',
  messagingSenderId: '440625744208',
  appId: '1:440625744208:web:e29d6a05ba7cb2676b4455',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
