import axios from "axios";
import { useState, useEffect } from "react";
import Moment from 'moment';

const Film = () => {
  const [films, setFilm] = useState([])
  const imageUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face/'

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0a350cb055a3de4cd194553ee54fd757')
      .then(response => {
        setFilm(response.data.results)
        console.log(films)
      });
    
  }, [])

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
                {films.map((data) => 
                    <div className="card_film">
                      <img  src={imageUrl + data.poster_path} alt="About Image"/>
                      <div className="description_film">
                        <div className="title_film">{data.original_title}</div>
                        <div className="release_film">{Moment(data.release_date).format('MMM DD, yyyy')}</div>
                      </div>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  )
}



export default Film