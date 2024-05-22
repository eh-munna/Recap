import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

export default function SignUp() {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const userEmail = result.user.email;
        const newUser = {
          email: userEmail,
        };
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl text-green-500">Welcome to Car Doctor!</h1>
        <p className="text-xl">Sign In</p>
      </div>

      <form onSubmit={handleSignUp} className="space-y-2">
        <div>
          <input type="email" name="email" id="" placeholder="email" />
        </div>
        <div>
          <input type="password" name="password" id="" placeholder="password" />
        </div>
        <div>
          <button>Sign up</button>
        </div>
      </form>
    </>
  );
}
