import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/DetallePeliculaYSerie.scss";
import defaultProps from "react-slick/lib/default-props";

const DetallePeliculaYSerie = () => {
  const params = useParams();
  const [peliculaYSerie, setPeliculaYSerie] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.idPYS}?api_key=0f992db40ce22ab302880645bfa455bf&language=es-ES`
    )
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
          <h3> Géneros:</h3>
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
