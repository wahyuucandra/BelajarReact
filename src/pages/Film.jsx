import Moment from 'moment';
import GetAllMovies from "../api/GetAllMovies";
import { useNavigate } from "react-router-dom";

const Film = () => {
  const films = GetAllMovies();
  const imageUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face/'
  const navigate = useNavigate();

  function getDetail (id) { 
    console.log(id)
    navigate("/film/"+id)
  }

  return (
    <div className="content">
      <div className="main_content">
        <div className="top_content">
          <div className="title_content">Popular Film</div>
          
          <ul class="breadcrumb">
            <li><a href="">Home</a></li>
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