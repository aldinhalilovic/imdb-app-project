import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <h1>
        2020 <span>©</span> Aldin Halilovic
      </h1>
      <button onClick={() => navigate("/")}>HOME</button>
    </div>
  );
};

export default Footer;
