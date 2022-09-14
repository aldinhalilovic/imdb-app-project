import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShowCast() {
  const { id } = useParams();
  const [cast, setCast] = useState({});

  const getCast = async (id) => {
    const res = await axios.get(
      `https://imdb-api.com/en/API/FullCast/k_83567lcb/${id}`
    );
    console.log(res.data);
  };

  useEffect(() => {
    getCast(id);
  }, [id]);

  return <div>ShowCast</div>;
}

export default ShowCast;
