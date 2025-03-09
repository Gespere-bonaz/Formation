import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from '../components/usersComponents/NavBar.js';
import { Footer } from '../components/usersComponents/Footer.js';
import { UserIndex } from "../pages/user/Home";

export const AccueilLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet /> {/* Permet de rendre les sous-routes */}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export const accueilRoutes = [
  {
    path: '/',
    element: <AccueilLayout />,
    children: [
      { path: "/", element: <UserIndex /> },
    ]
  }
];
