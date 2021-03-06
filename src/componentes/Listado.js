import { Link } from "react-router-dom";
import Tarjeta from "./Tarjeta";
import "../styles/Listado.scss";

const Listado = ({ titulo, peliculasYSeries, tipo }) => {
  return (
    <div className="contenedor-listado">
      <h2>{titulo}</h2>
      <div className="listado">
        {peliculasYSeries.map((peliculaYSerie) => (
          <Link key={peliculaYSerie.id} to={`/${tipo}/${peliculaYSerie.id}`}>
            <Tarjeta
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
