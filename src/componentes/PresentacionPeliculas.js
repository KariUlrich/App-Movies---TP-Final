import { Link } from "react-router-dom";
import Tarjeta from "./Tarjeta";

const PresentacionPeliculas = ({ titulo, peliculas }) => {
  return (
    <div>
      <h1>{titulo}</h1>
      {peliculas.map((pelicula) => (
        <Link to={`/movie/:id/${pelicula.id}`}>
          <Tarjeta key={pelicula.id} titulo={pelicula.title} />
        </Link>
      ))}
    </div>
  );
};

export default PresentacionPeliculas;
