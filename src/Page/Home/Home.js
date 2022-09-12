import React from "react";
import "./Home.css";

const ariaLabel = { "aria-label": "description" };

const Home = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <input type={"text"} placeholder={"Search..."} className="input"></input>
    </div>
  );
};

export default Home;
