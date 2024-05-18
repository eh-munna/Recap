import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

export default function Form() {
  const { setUser, user, createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;
        (async () => {
          const response = await fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
          });
          const data = await response.json();
          console.log(data);
        })();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    console.log(name, password);
  };
  const formBody = (
    <form
      onSubmit={user ? handleSignIn : handleSignUp}
      className="flex flex-col space-y-3 mx-auto w-1/2 border border-green-500 p-2 m-2"
    >
      <input
        className="p-1 rounded-sm focus:outline-none focus:placeholder:text-green-500 focus:text-sky-500"
        type="email"
        name="email"
        id="name"
        placeholder="email"
      />
      <input
        className="p-1 rounded-sm focus:outline-none focus:placeholder:text-green-500 focus:text-sky-500"
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <input
        className="border border-green-500 rounded-md p-1 cursor-pointer"
        type="submit"
        value={user ? `Log In` : `Sign Up`}
      />
    </form>
  );

  return <>{formBody}</>;
}
