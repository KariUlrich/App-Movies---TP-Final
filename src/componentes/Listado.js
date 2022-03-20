import { Link } from "react-router-dom";
import Tarjeta from "./Tarjeta";

const Listado = ({ titulo, peliculasYSeries }) => {
  return (
    <div className="contenedor-listado">
      <h2>{titulo}</h2>
      <div className="contenedor-listado">
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

export default Listado;
