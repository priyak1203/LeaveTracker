import axios from 'axios';
import { getUserFromLocalStorage } from './localStorage';

const customFetch = axios.create({
  baseURL: `http://localhost:5000/api/v1`,
});

customFetch.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage();
    if (user) {
      config.headers['Authorization'] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customFetch;

// customFetch.interceptors.request.use(
//   (config) => {
//     const user = getUserFromLocalStorage();
//     if (user) {
//       config.headers['Authorization'] = `Bearer ${user.token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.request.use(function (req) {
//   const user = localStorage.getItem('user');

//   if (user) {
//     const { token } = JSON.parse(localStorage.getItem('user'));
//     req.headers.authorization = `Bearer ${token}`;
//     return req;
//   }

//   return req;
// });
