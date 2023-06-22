import Moment from 'moment';
import GetMoviesById from '../api/GetMoviesById';
import {
  useParams,
  Link
} from "react-router-dom"

const imageUrl  = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/'
const imageUrl2 = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' 

const DetailFilm = (data, context) => {
  const param = useParams()
  console.log(param)
  var film = GetMoviesById(param.id)

  console.log(film)

  var detail_film = {
    width: "90%",
    height: "500px",
    backgroundImage: "url(" + imageUrl +  film.backdrop_path + ")",
    position: "absolute",
    borderRadius: "8px"
  }

  const setFormatGenre = (film) => {
    if(film.length != 0){
      var genre = ""
      film.genres.map((data) =>
        genre = genre + ", " + data.name
      )
      return genre.slice(1)
    }
  }

  const setFormatRuntime = (film) => {
    if(film.length != 0){
      return  Math.round(film.runtime/60) + "h " + film.runtime % 60 + " m"
    }
  }

  return (
    <div id="content" className="content">
      <div className="main_content">
        <div className="top_content">
          <div className="title_content">Detail Film</div>
          
          <ul class="breadcrumb">
            <li><Link href="home">Home</Link></li>
            <li>Detail Film</li>
          </ul>
        </div>
         
        <div className="content_midle">
            <div style={detail_film}></div>
            <div className="single_column">
                  <img className="image-content" src={imageUrl2 + film.poster_path} alt="lainnya"/>
                  <div className="description_film">
                    <div className="detail_title_film">{film.original_title + Moment(film.release_date).format(' (yyyy)')}</div>
                    <div className="fact">
                       <span className="certification">SU</span>
                       <span className="release">{Moment(film.release_date).format('MM/DD/YYYY') + " (ID)"}</span>
                       <span> {setFormatGenre(film)} </span>
                       <span> {setFormatRuntime(film)} </span>
                    </div>
                    <div className="tagline">
                      {film.tagline}
                      <h2 className="overview">Overview</h2>
                      <p >{film.overview}</p>
                      </div>
                  </div>
              </div>
            
        </div>
      </div>
    </div>
  )
}

export default DetailFilm