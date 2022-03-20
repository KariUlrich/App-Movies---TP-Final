import { Link } from "react-router-dom";
import Tarjeta from "./Tarjeta";
import "../styles/PresentacionPelicula.scss";
import { FaArrowCircleRight } from "react-icons/fa";

const PresentacionPeliculas = ({ titulo, peliculasYSeries, link }) => {
  return (
    <div className="contenedor-presentacion">
      <Link to={link}>
        <div className="link-lista">
          <h2>{titulo}</h2>
          <FaArrowCircleRight className="icono-listado" />
        </div>
      </Link>
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
