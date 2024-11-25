import { useContext } from "react";
import { AuthContext } from "./AuthContextProvider";
import { Navigate } from "react-router-dom";

export function PrivetRouter({ children }) {
  const { authDetail } = useContext(AuthContext);

  if (!authDetail.isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}
