// import React, {lazy} from "react";
import { useRoutes } from "react-router-dom";
import { authRoutes } from "./authRoutes";
import { userRoutes } from "./userRoutes";
import { adminRoutes } from "./adminRoutes";
import { UserIndex } from "../pages/user/Home";


const AppRoutes = () => {
  
  const routes = [
    ...UserIndex, 
    ...authRoutes, // Routes Auth
    ...userRoutes, // Routes utilisateur
    ...adminRoutes, // Routes admin
    { path: "/", element: <UserIndex /> }, // Route par défaut
  ];

  return useRoutes(routes); // On utilise useRoutes pour combiner les routes
};

export default AppRoutes;
