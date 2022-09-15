import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const active = {
    color: "#14a098",
    textDecoration: "none",
    transition: "0.3s",
    marginRight: 20,
  };
  return (
    <div className="nav">
      <div className="logo">
        <h1>IMDB API</h1>
      </div>
      <div className="navbar">
        <NavLink
          className={({ isActive }) => !isActive && "option"}
          style={({ isActive }) => (isActive ? active : undefined)}
          to={"/movies"}
        >
          <h1>Movies</h1>
        </NavLink>
        <NavLink
          className={({ isActive }) => !isActive && "option"}
          style={({ isActive }) => (isActive ? active : undefined)}
          to={"/shows"}
        >
          <h1>Tv Show's</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
