import Moment from 'moment';
import GetAllMovies from "../api/GetAllMovies";
import { useNavigate, Link } from "react-router-dom";
import {createContext, useEffect, useState} from "react"

const Film = () => {
  const imageUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face/'
  const navigate = useNavigate()
  const levelContext = createContext()
  const [type, setType] = useState("popular")
  var films = []

  films = GetAllMovies(type)

  const changeType = (event) => {
    setType(event.target.value)
  }

  function getDetail (id) { 
    navigate("/film/"+id)
  }

  return (
    <div id="content" className="content">
      <div className="main_content">
        <div className="top_content">
          <div className="title_content">
            <select value="type" onChange={changeType}>
              <option value="popular">Popular</option>
              <option value="now_playing">Now Playing</option>
              <option value="upcoming">Up Coming</option>
              <option value="top_rated">Top Rated</option>
            </select>
          </div>
          
          <ul class="breadcrumb">
            <li><a href="/">Home</a></li>
            <li>Film</li>
          </ul>
        </div>
         
        <div className="content_midle">
            <div className="film_container">
                {films.map((data, id) => 
                    <div key = {id} className="card_film" onClick={ () => getDetail(data.id)}>
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