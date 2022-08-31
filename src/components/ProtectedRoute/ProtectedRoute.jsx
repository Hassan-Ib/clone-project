import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
import TokenServices from "../../services/token.services";

const ProtectedRoute = ({ chidren }) => {
  const access_token = TokenServices.getAccessToken();

  const location = useLocation();

  return access_token ? (
    <Outlet />
  ) : (
    <Navigate to={"/auth-login"} state={{ from: location.pathname }} replace />
  );
};

export default ProtectedRoute;
