import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carusel.scss";
import { urlBase, apiKey } from "../utils/variables";

const Carousel = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(`${urlBase}movie/upcoming?${apiKey}&language=es-ES&page=1`)
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
        autoplaySpeed={3000}
      >
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="slick-container">
            <div
              className="slick-img"
              style={{
                backgroundImage:
                  "url(" +
                  (pelicula.backdrop_path
                    ? `https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}`
                    : "https://www.seoptimer.com/es/blog/wp-content/uploads/2015/07/Destacada.jpg") +
                  ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="slick-descripcion">
              <h3>{pelicula.title}</h3>
              <p className="descip">{pelicula.overview}</p>
              <Link to={`/movie/${pelicula.id}`}>
                <p className="link-a-detalle">Ver Mas...</p>{" "}
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
