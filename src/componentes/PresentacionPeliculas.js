import { Link } from "react-router-dom";
import Tarjeta from "./Tarjeta";
import "../styles/PresentacionPelicula.scss";

const PresentacionPeliculas = ({ titulo, peliculasYSeries }) => {
  return (
    <div className="contenedor-presetnacion">
      <h2>{titulo}</h2>
      <div className="contenedor-tarjeta">
        {peliculasYSeries.map((peliculaYSerie) => (
          <Link to={`/movie/:idPYS/${peliculaYSerie.id}`}>
            <Tarjeta
              key={peliculaYSerie.id}
              titulo={peliculaYSerie.title}
              nombre={peliculaYSerie.name}
              imagen={`https://image.tmdb.org/t/p/w300/${peliculaYSerie.poster_path}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PresentacionPeliculas;
