/* import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../configs/firebase.config';
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };

        axiosPublic.post('/jwt', userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem('token', res.data.token);
            setLoading(false);
          }
        });
        // const { data } = response;
      } else {
        localStorage.removeItem('token');
        setLoading(false);
      }
    });
    return () => unsubscribe(); // Clean up on unmount
  }, [axiosPublic, auth]);

  const authInfo = {
    user,
    setUser,
    createUser,
    logInUser,
    logOutUser,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
 */

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../configs/firebase.config';
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const auth = getAuth(app);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = () => {
    setLoading(true);
    // setUser(null);
    // localStorage.removeItem('token');
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };

        axiosPublic
          .post('/jwt', userInfo)
          .then((res) => {
            if (res.data.token) {
              // Logging
              localStorage.setItem('token', res.data.token);
              setLoading(false);
            } else {
              console.log('No token received'); // Logging
            }
          })
          .catch((err) => {
            console.error('Error in token request:', err); // Error handling
          });
      } else {
        localStorage.removeItem('token');
        setLoading(false);
      }
    });
    return () => unsubscribe(); // Clean up on unmount
  }, [axiosPublic, auth]);

  const authInfo = {
    user,
    setUser,
    createUser,
    logInUser,
    logOutUser,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
