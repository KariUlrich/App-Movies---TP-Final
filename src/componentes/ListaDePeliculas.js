import { useEffect, useState } from "react";
import ItemPeli from "./ItemPeli";

const ListaDePeliculas = ({ titulo, url }) => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${url}?api_key=0f992db40ce22ab302880645bfa455bf&language=es-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, []);
  return (
    <div>
      <h1>{titulo}</h1>
      {peliculas.map((pelicula) => (
        <ItemPeli
          key={pelicula.id}
          titulo={pelicula.title}
          imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
          link={`/movie/:id/${pelicula.id}`}
        />
      ))}
    </div>
  );
};

export default ListaDePeliculas;
