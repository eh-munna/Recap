import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';

const axiosSecure = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000',
});

export default function useAxiosSecure() {
  const { logOut } = useAuth();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        const { status: statusCode } = error.response;
        if (statusCode === 401) {
          logOut()
            .then(() => {
              // Sign-out successful.
            })
            .catch((error) => {
              // An error happened.
              console.error('Error signing out:', error);
            });
        }
      }
    );
  }, [logOut]);

  return axiosSecure;
}
