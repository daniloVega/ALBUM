import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the AuthContext with default values
const AuthContext = createContext({
  isAuthenticated: false,
  checkAuth: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for token in local storage on component mount
    const storedToken = localStorage.getItem('authToken');
    console.log(storedToken);

    if (storedToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const checkAuth = () => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
