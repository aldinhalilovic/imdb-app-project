import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Shows.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Paginacija from "../../components/Paginacija/Paginacija";
import { useNavigate } from "react-router-dom";

const Shows = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(18);

  const navigate = useNavigate();

  const getSeries = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://imdb-api.com/en/API/Top250TVs/k_83567lcb"
    );
    setSeries(res.data.items);
    setLoading(false);
  };

  useEffect(() => {
    getSeries();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = series.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      {loading ? (
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {currentPosts.map((el) => {
            return (
              <div
                key={el.id}
                style={{
                  height: "100%",
                  width: "500px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "50px",
                  marginBottom: "50px",
                }}
                onClick={() => navigate(`shows/${el.id}`)}
              >
                <Card
                  sx={{
                    minWidth: 250,
                    maxWidth: 250,
                    mt: 3,
                    minHeight: "420px",
                    maxHeight: "420px",
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
                      <Typography gutterBottom variant="h6" component="div">
                        <strong>{el.fullTitle}</strong>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {el.title}
                        <br />
                        Rank : {el.rank}
                        <br />
                        {el.imDbRating}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            );
          })}
          <Paginacija
            totalPosts={series.length}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default Shows;
