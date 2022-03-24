import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/DetallePeliculaYSerie.scss";
// import defaultProps from "react-slick/lib/default-props";
import { urlBase, apiKey } from "../utils/variables";

const DetallePeliculaYSerie = () => {
  const params = useParams();
  const [peliculaYSerie, setPeliculaYSerie] = useState([]);

  useEffect(() => {
    fetch(`${urlBase}movie/${params.idPYS}?${apiKey}&language=es-ES`)
      .then((res) => res.json())
      .then((data) => setPeliculaYSerie(data));
    // console.log(data));
  }, []);
  console.log(peliculaYSerie.poster_path);

  return (
    <div className="contenedor-imagen-detalle-fondo">
      <div
        className="contenedor-imagen-fondo"
        style={{
          backgroundImage:
            "url(" +
            `https://image.tmdb.org/t/p/original/${peliculaYSerie.backdrop_path}` +
            ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
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
          <p>Puntaje: {peliculaYSerie.vote_average}</p>
          <p>Duración: {peliculaYSerie.runtime} min</p>
          <h3>Descripción</h3>
          <p>{peliculaYSerie.overview}</p>
          <h4> Géneros:</h4>
          <div>
            {peliculaYSerie.genres?.map((genero) => (
              <p key={genero.id}>{genero.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallePeliculaYSerie;
