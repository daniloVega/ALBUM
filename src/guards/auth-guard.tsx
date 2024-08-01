import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function AuthGuard({ element }: any) {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return element;
}

export default AuthGuard;
