import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

function ClientPrivate({ children }) {
  const { isAuth } = useAuth();
  console.log("client private", isAuth);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ClientPrivate;
