import { useState, useEffect } from "react";
import axios from 'axios'

const baseURL = "https://api.themoviedb.org/3/movie/popular?api_key=0a350cb055a3de4cd194553ee54fd757";

const FetchApi = () => {

  useEffect(() => {
    axios.get(baseURL).then((response) => {
        console.log(response.data);
        return response;
    });
  }, []);

  return ;
}

export default FetchApi;