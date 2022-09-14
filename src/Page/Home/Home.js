import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Home = () => {
  const [title, setTitle] = useState([]);
  const [vrednost, setVrednost] = useState("");
  const [result, setResult] = useState("");

  const API_KEY = "k_w7k9gevm";
  const API_KEY_2 = "k_s8b599dl";
  const API_KEY_3 = "k_l3ayqof0";
  const getMovies = async () => {
    const res = await axios.get(
      `https://imdb-api.com/en/API/SearchMovie/${API_KEY}/${result}`
    );
    setTitle(res.data.results.splice(0, 3));
  };

  useEffect(() => {
    getMovies();
  }, [result]);
  return (
    <div>
      <h1 style={{ color: "#cb2d6f" }}>HOME PAGE</h1>
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

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {title.map((el) => {
          return (
            <div
              key={el.id}
              style={{
                marginTop: "50px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card
                sx={{
                  minWidth: 345,
                  maxWidth: 345,
                  mt: 3,
                  maxHeight: "320px",
                  backgroundColor: "#cccccc",
                  color: "#cb2d6f",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image={el.image}
                    alt={el.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {el.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {el.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
