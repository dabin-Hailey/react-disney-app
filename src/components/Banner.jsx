import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import requests from "../api/requests";

const Banner = () => {
  const [movie, setMovie] = useState({});

  const fetchData = async () => {
    const response = await axios.get(requests.fetchTopRated);
    // console.log(response);
    const seriesID =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;

    const { data: seriesDetail } = axios.get(`/tv/${seriesID}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(seriesDetail);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Banner</div>;
};

export default Banner;
