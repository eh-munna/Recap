import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';
import { app } from './firebase/firebase.config';
export default function Login() {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    // e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    // create a new login form with sign up buttons
    <>
      <form className="w-2/3 mx-auto">
        <div className="mb-4">
          <label
            className="block text-sky-500 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="<EMAIL>"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-sky-500 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="flex items-center gap-6">
          {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign In
        </button> */}

          <button
            className="bg-[#41C9E2] border border-indigo-300  text-[#F7EEDD] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign Up
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="bg-[#41C9E2] border border-indigo-300  text-[#F7EEDD] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Google Login
          </button>
          <button
            onClick={handleSignOut}
            className="bg-[#41C9E2] border border-indigo-300  text-[#F7EEDD] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign out
          </button>
        </div>
      </form>

      <div>
        <h2 className="text-xl">{user && user.displayName}</h2>
      </div>
    </>
  );
}
