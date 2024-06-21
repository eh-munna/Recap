import axios from 'axios';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../configs/firebase.config';

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = { email: currentUser?.email || user?.email };
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        (async () => {
          const response = await axios.post(
            'http://localhost:3000/jwt',
            userEmail,
            { withCredentials: true }
          );
          const { data } = await response;
          console.log(data);
          // localStorage.setItem('userToken', JSON.stringify(data.token));
        })();
      } else {
        axios
          .post('http://localhost:3000/logout', userEmail, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));
      }
    });
    return () => unsubscribe();
  }, [auth, user?.email]);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signInUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
