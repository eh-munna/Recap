import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

export default function useAxiosSecure() {
  const navigate = useNavigate();
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
              navigate('/');
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
