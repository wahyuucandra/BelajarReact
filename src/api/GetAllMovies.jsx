import { useState, useEffect } from "react";
import axios from 'axios'

const baseURL = "https://api.themoviedb.org/3/movie/";
const apiKey  = "?api_key=0a350cb055a3de4cd194553ee54fd757"

const GetAllMovies = (type) => {
  const [films, setFilm] = useState([])

  useEffect(() => {
    axios.get(baseURL + type + apiKey)
      .then(response => {
        setFilm(response.data.results)
      }).catch(error => {
        console.log(error)
      });
    
  }, [type])

  return films;
}

export default GetAllMovies;