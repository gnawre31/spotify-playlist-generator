import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth/AuthState";

// URLs only accessible if logged in
const PublicRoute = ({ Component }) => {
  const [authState] = useAuth();
  const { spotifyId } = authState;
  return spotifyId === null ? <Component /> : <Navigate to="/main" />;
};

export default PublicRoute;
