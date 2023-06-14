import axios from "axios";
import { useState, useEffect } from "react";

const Film = () => {
  const [film, setFilm] = useState([])

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular/200?api_key=0a350cb055a3de4cd194553ee54fd757')
      .then(response => 
        setFilm(response)
      );
    console.log(film);
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
            {/* <div className="film_container">
                {animals.map((film) => 
                    <div>
                      <img src={film} alt="About Image"/>
                    </div>
                )}
            </div> */}
        </div>
      </div>
    </div>
  )
}



export default Film