import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

const ariaLabel = { "aria-label": "description" };

const Home = () => {
  const [title, setTitle] = useState([]);

  const getMovies = async () => {
    const res = await axios.get(
      "https://imdb-api.com/en/API/SearchMovie/k_w7k9gevm/fast"
    );
    setTitle(res.data.results.splice(0, 3));
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>HOME PAGE</h1>
      <input type={"text"} placeholder={"Search..."} className="input"></input>
      {title.map((el) => {
        return (
          <div key={el.id}>
            <h1>{el.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
