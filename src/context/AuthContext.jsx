import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("no context");
  }

  return auth;
};
