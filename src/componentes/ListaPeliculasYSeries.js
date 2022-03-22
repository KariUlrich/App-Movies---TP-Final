import { useEffect, useState } from "react";
import Item from "./Item";
import "../styles/ListaPeliculasYSeries.scss";

const ListaPeliculasYSeries = ({ titulo, url }) => {
  const [peliculasYSeries, setPeliculasYSeries] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${url}?api_key=0f992db40ce22ab302880645bfa455bf&language=es-ES&page=1`
    )
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
          link={`/movie/${peliculaYSerie.id}`}
        />
      ))}
    </div>
  );
};

export default ListaPeliculasYSeries;

// link={`/movie/:idPYS/${peliculaYSerie.id}`}
