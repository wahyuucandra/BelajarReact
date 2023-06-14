import Moment from 'moment';

const DetailFilm = (data) => {
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



export default DetailFilm