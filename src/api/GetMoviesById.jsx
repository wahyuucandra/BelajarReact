import { useState, useEffect } from "react";
import axios from 'axios'

const baseURL = "https://api.themoviedb.org/3/movie/";
const apiKey  = "?api_key=0a350cb055a3de4cd194553ee54fd757"

const GetMoviesById = (id) => {
  const [film, setFilm] = useState([])

  const fetchData = () => {
    
  }

  useEffect(() => {
    axios.get(baseURL + id + apiKey)
    .then(response => {
      setFilm(response.data)
    }).catch(error => {
      console.log(error)
    });
  }, [])

  return film;
}

export default GetMoviesById;