import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const BASE_URL = process.env.REACT_APP_BASE_URL;

type Register = {
  email: string;
  password: string;
};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const register = async (payload: Register) => {
  const result = await axiosInstance.post(`${BASE_URL}/auth/register`, payload);
  return result;
};

export const login = async (payload: Register) => {
  const result = await axiosInstance.post(`${BASE_URL}/auth/login`, payload);
  return result;
};
