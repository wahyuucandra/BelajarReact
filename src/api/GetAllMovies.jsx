import { useState, useEffect } from "react";
import axios from 'axios'

const baseURL = "https://api.themoviedb.org/3/movie/popular?api_key=0a350cb055a3de4cd194553ee54fd757";

const GetAllMovies = () => {
  const [films, setFilm] = useState([])

  useEffect(() => {
    axios.get(baseURL)
      .then(response => {
        setFilm(response.data.results)
        console.log(films)
      });
    
  }, [])

  return films;
}

export default GetAllMovies;