import { useEffect, useState } from "react";
import Item from "./Item";
import "../styles/ListaPeliculasYSeries.scss";
import { urlBase, apiKey } from "../utils/variables";

const ListaPeliculasYSeries = ({ titulo, tipo, categoria }) => {
  const [peliculasYSeries, setPeliculasYSeries] = useState([]);

  useEffect(() => {
    fetch(`${urlBase}${tipo}/${categoria}?${apiKey}&language=es-ES&page=1`)
      .then((res) => res.json())
      .then((data) => setPeliculasYSeries(data.results));
  }, []);
  return (
    <div className="lista">
      <h2>{titulo}</h2>
      {peliculasYSeries.map((peliculaYSerie) => (
        <Item
          key={peliculaYSerie.id}
          titulo={peliculaYSerie.title}
          nombre={peliculaYSerie.name}
          imagen={`https://image.tmdb.org/t/p/w200/${peliculaYSerie.poster_path}`}
          link={`/${tipo}/${peliculaYSerie.id}`}
        />
      ))}
    </div>
  );
};

export default ListaPeliculasYSeries;

// link={`/movie/:idPYS/${peliculaYSerie.id}`}
