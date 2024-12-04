// src/services/auth.js
import api from './api';

export const login = async (email, password) => {
  const response = await api.post('/auth/jwt/create/', { email, password });
  return response.data; // Return the JWT token
};

export const signup = async (username, email, password) => {
  const response = await api.post('/auth/users/', { username, email,password });
//   console.log(email,"hhhhhhhhhhhhhhhhhhh")
  return response.data; // Return user data or success message
};
export const logout = () => {
  localStorage.removeItem('token'); // Remove the token to log the user out
};
