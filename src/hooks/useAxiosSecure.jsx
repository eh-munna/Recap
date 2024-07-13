/* import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000',
});
export default function useAxiosSecure() {
  const navigate = useNavigate();
  const { logOutUser } = useAuth();

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        navigate('/log-in');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  axiosSecure.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      const token = localStorage.getItem('token');
      console.log({ token });
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosSecure.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      const { status } = error.response;
      console.log(status);
      if (status === 401 || status === 403) {
        handleLogOut();
      }
      return Promise.reject(error);
    }
  );

  // axiosSecure.interceptors.request.use(
  //   (config) => {
  //     config.headers.authorization = `Bearer ${token}`;
  //     return config;
  //   },
  //   (error) => {
  //     // Do something with request error
  //     return Promise.reject(error);
  //   }
  // );

  // axiosSecure.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   (error) => {
  //     const status = error.response.status;
  //     if (status === 401 || status === 403) {
  //       localStorage.removeItem('token');
  //       logOutUser();

  //       navigate('/log-in');
  //     }
  //     return Promise.reject(error);
  //   }
  // );
  return axiosSecure;
}
 */

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000',
});

export default function useAxiosSecure() {
  const navigate = useNavigate();
  const { logOutUser } = useAuth();

  // const handleLogOut = () => {
  //   logOutUser()
  //     .then(() => {
  //       navigate('/log-in');
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      // Logging
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const { status } = error.response;
      console.log('Response error status:', status); // Logging
      if (status === 401 || status === 403) {
        logOutUser().then(() => {
          localStorage.removeItem('token');
          navigate('/log-in');
        });
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
}
