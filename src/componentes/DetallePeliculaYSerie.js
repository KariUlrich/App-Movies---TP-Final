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
  }, []);

  return (
    <div className="contenedor-imagen-detalle-grande">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${peliculaYSerie.poster_path}`}
          alt="detalle de pelicula fondo"
          className="imagen-detalle-fondo"
        ></img>
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300/${peliculaYSerie.poster_path}`}
              alt="detalle de pelicula card"
            ></img>
          </div>
          <h2>{peliculaYSerie.title}</h2>
          <h2>{peliculaYSerie.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default DetallePeliculaYSerie;
