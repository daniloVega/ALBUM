import api from '../api';
import { useMutation } from 'react-query';
const registerUser = async (userData: any) => {
  const { data } = await api.post('/api/Auth/register', userData);
  console.log('registrationData', data);
};

// Custom hook for user registration
export const useRegisterUser = () => {
  return useMutation(registerUser);
};
