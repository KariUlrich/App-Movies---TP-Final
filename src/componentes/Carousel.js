import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carusel.scss";

const Carousel = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing/?api_key=0f992db40ce22ab302880645bfa455bf&language=es-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, []);

  return (
    <div>
      <Slider
        dots={true}
        arrows={true}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        speed={2000}
        autoplaySpeed={2000}
      >
        {peliculas.map((pelicula) => (
          <div Key={pelicula.id} className="slick-container">
            <div className="slick-img">
              <img
                src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
              ></img>
            </div>
            <h3>{pelicula.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
