import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

export default function Login() {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then(() => {
        e.target.reset();
        navigate('/');
      })
      .catch((err) => {
        if (err.code === 'auth/invalid-credential') {
          alert('The email address is invalid');
          //   return;
          // } else if (err.code === 'auth/user-disabled') {
          //   alert('The user account has been disabled');
          //   return;
          // } else if (err.code === 'auth/user-not-found') {
          //   alert('The user account does not exist');
          //   return;
          // } else if (err.code === 'auth/wrong-password') {
          //   alert('The password is invalid');
          //   return;
        }
        // console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            className="block text-[#168039] text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-[#168039] text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            name="password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign in
          </button>
          <div className="flex gap-3 items-center">
            <NavLink
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/register"
            >
              Don&apos;t have an account?
            </NavLink>
            <NavLink
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to=""
            >
              Forgot your password?
            </NavLink>
          </div>
        </div>
      </form>
    </>
  );
}
