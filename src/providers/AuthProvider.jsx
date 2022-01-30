import { createContext, useContext, useEffect, useState } from "react";

const AuthCartContext = createContext();
const AuthCartContextDispatcher = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("stateAuth")) || null;
    setAuth(userData);
  }, []);

  useEffect(() => {
    localStorage.setItem("stateAuth", JSON.stringify(auth));
  }, [auth]);
  return (
    <AuthCartContext.Provider value={auth}>
      <AuthCartContextDispatcher.Provider value={setAuth}>
        {children}
      </AuthCartContextDispatcher.Provider>
    </AuthCartContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthCartContext);
};
export const useAuthDispatch = () => {
  return useContext(AuthCartContextDispatcher);
};
