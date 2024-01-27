import React from "react";
import './Header.scss';
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="testLink">
      <NavLink to="signin" className="navbarItem">
        Sign in
      </NavLink>
      
    </div>
  );
};