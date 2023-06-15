import Moment from 'moment';
import GetMoviesById from '../api/GetMoviesById';
import {
  useParams,
  Link
} from "react-router-dom"

const imageUrl  = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/'
const imageUrl2 = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' 

const DetailFilm = (data) => {
  const param = useParams()
  const film = GetMoviesById(param.id)

  var detail_film = {
    width: "90%",
    height: "500px",
    backgroundImage: "url(" + imageUrl +  film.backdrop_path + ")",
    filter: "blur(3px)",
    position: "absolute",
  }

  return (
    <div className="content">
      <div className="main_content">
        <div className="top_content">
          <div className="title_content">Popular Film</div>
          
          <ul class="breadcrumb">
            <li><Link href="home">Home</Link></li>
            <li>Film</li>
          </ul>
        </div>
         
        <div className="content_midle">
            <div style={detail_film}></div>
            <div className="single_column">
                  <img className="image-content" src={imageUrl2 + film.poster_path} alt="lainnya"/>
                  <div className="description_film">
                    <div className="title_film">{film.original_title}</div>
                    <div className="release_film">{Moment(film.release_date).format('MMM DD, yyyy')}</div>
                  </div>
              </div>
            
        </div>
      </div>
    </div>
  )
}

export default DetailFilm