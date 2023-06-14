import { useState, useEffect } from "react";
import axios from 'axios'

const baseURL = "https://api.themoviedb.org/3/movie/popular?api_key=0a350cb055a3de4cd194553ee54fd757";

useEffect(() => {
  axios.get(baseURL).then((response) => {
      console.log(response.data);
      return response;
  });
}, []);

const Film = () => {
  return (
    <div className="content">
      <div className="main_content">
        <div className="top_content">
          <div className="title_content">Popular Film</div>
          
          <ul class="breadcrumb">
            <li><a href="home">Home</a></li>
            <li>Film</li>
          </ul>
        </div>
         
        <div className="content_midle">
            <div className="film_container">
                {animals.map((film) => 
                    <div>
                      <img src={film} alt="About Image"/>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  )
}



export default Film