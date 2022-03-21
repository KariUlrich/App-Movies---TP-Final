import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/DetallePeliculaYSerie.scss";

const DetallePeliculaYSerie = () => {
  const params = useParams();
  const [peliculaYSerie, setPeliculaYSerie] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.idPYS}?api_key=0f992db40ce22ab302880645bfa455bf&language=es-AR`
    )
      .then((res) => res.json())
      .then((data) => setPeliculaYSerie(data));
    // console.log(data));
  }, []);

  return (
    <div className="contenedor-imagen-detalle-fondo">
      <div className="contenedor-imagen-fondo">
        <img
          src={`https://image.tmdb.org/t/p/w300/${peliculaYSerie.poster_path}`}
          alt="detalle de pelicula fondo"
          className="imagen-detalle-fondo"
        ></img>
      </div>
      <div className="contendor-detalle">
        <div className="contenedor-imagen-chica">
          <img
            src={`https://image.tmdb.org/t/p/w300/${peliculaYSerie.poster_path}`}
            alt="detalle de pelicula card"
          ></img>
        </div>
        <div className="detalle">
          <h2>
            {peliculaYSerie.title ? peliculaYSerie.title : peliculaYSerie.name}
          </h2>
          <h3>Descripción</h3>
          <p>{peliculaYSerie.overview}</p>
          <h3>Generos</h3>
          {/* <p>{peliculaYSerie.genres}</p> */}
        </div>
      </div>
    </div>
  );
};

export default DetallePeliculaYSerie;
