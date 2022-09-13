import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [title, setTitle] = useState([]);

  const [vrednost, setVrednost] = useState("");
  const [result, setResult] = useState("");

  const getMovies = async () => {
    const res = await axios.get(
      `https://imdb-api.com/en/API/SearchMovie/k_w7k9gevm/${result}`
    );
    console.log(res.data);
  };

  useEffect(() => {
    getMovies();
  }, [result]);
  return (
    <div>
      <h1>HOME PAGE</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setResult(vrednost);
          setVrednost("");
        }}
      >
        <input
          type={"text"}
          placeholder={"Search..."}
          className="input"
          value={vrednost}
          onChange={(e) => {
            setVrednost(e.target.value);
          }}
        ></input>
      </form>

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
