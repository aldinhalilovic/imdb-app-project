import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function MovieCast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  const getCast = async (id) => {
    const res = await axios.get(
      `https://imdb-api.com/en/API/FullCast/k_83567lcb/${id}`
    );
    setCast(res.data.actors);
    console.log(res.data.actors);
  };

  useEffect(() => {
    getCast(id);
  }, [id]);
  console.log(cast.map((el) => el.name));

  return (
    <div>
      {cast.map((el) => {
        <div key={el.id}>
          <li>{el.name}</li>
        </div>;
      })}
    </div>
  );
}

export default MovieCast;
