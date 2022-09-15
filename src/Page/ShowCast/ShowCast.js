import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function ShowCast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  const getCast = async (id) => {
    const res = await axios.get(
      `https://imdb-api.com/en/API/FullCast/k_w7k9gevm/${id}`
    );
    setCast(res.data.actors);
    console.log(res.data.actors);
  };

  useEffect(() => {
    getCast(id);
  }, [id]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {cast.map((el) => {
        return (
          <div
            key={el.id}
            style={{
              height: "100%",
              width: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            <Card
              sx={{
                minWidth: 250,
                maxWidth: 250,
                mt: 3,
                minHeight: "320px",
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
                  <Typography variant="body2" color="text.secondary">
                    {el.name} as {el.asCharacter}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default ShowCast;
