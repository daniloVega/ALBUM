import axios from 'axios';
import { API_BASE_URL } from '../config';

const baseUrl = API_BASE_URL;

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});
api.interceptors.response.use(
  (response) => {
    const token = response.data.message;
    if (token) {
      localStorage.setItem('authToken', token);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
