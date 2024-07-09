import axios from 'axios';

type Register = {
  email: string;
  password: string;
};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const register = async (payload: Register) => {
  const result = await axiosInstance.post('http://localhost:4000/auth/register', payload);
  return result;
};

export const login = async (payload: Register) => {
  const result = await axiosInstance.post('http://localhost:4000/auth/login', payload);
  return result;
};
