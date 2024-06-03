import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const login = (userData) => {
    setAuth(userData);
  };

  const logout = () => {
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;
export const useAuth = () => useContext(AuthContext);