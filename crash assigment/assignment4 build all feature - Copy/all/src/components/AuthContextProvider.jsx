import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [authDetail, setAuthDetails] = useState({
    isLoggedIn: false,
    token: null,
  });
  console.log(authDetail, "auth value");
  const login = (token) => {
    setAuthDetails({
      isLoggedIn: true,
      token: token,
    });
  };

  const logout = () => {
    setAuthDetails({
      isLoggedIn: false,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authDetail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
