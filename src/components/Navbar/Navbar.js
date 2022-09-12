import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const active = {
    color: "#cccccc",
    textDecoration: "none",
    transition: "0.3s",
    marginRight: 20,
  };
  return (
    <div className="navbar">
      <NavLink
        className={({ isActive }) => !isActive && "option"}
        style={({ isActive }) => (isActive ? active : undefined)}
        to={"/movie"}
      >
        <h1>Movie</h1>
      </NavLink>
      <NavLink
        className={({ isActive }) => !isActive && "option"}
        style={({ isActive }) => (isActive ? active : undefined)}
        to={"/series"}
      >
        <h1>Tv show</h1>
      </NavLink>
    </div>
  );
};

export default Navbar;
