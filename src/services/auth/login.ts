import { useMutation } from 'react-query';
import api from '../api';

const loginUser = async (userData: any) => {
  const data = await api.post('/api/Auth/login', userData);
  return data;
};

export const useLoginUser = () => {
  return useMutation(loginUser);
};
