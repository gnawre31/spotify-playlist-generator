import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthState";

// URLs only accessible if logged in
const PrivateRoute = ({ Component }) => {
  const [authState] = useAuth();
  const { spotifyId } = authState;
  return spotifyId !== null ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
