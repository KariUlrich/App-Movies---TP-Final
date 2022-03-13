import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetallePeliculaYSerie = () => {
  const params = useParams();
  const [peliculasYSeries, setPeliculasYSeries] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.idPYS}?api_key=0f992db40ce22ab302880645bfa455bf&language=es-AR`
    )
      .then((res) => res.json())
      .then((data) => console.log(data.results));
  }, []);

  return (
    <div>
      <h1>Detalle</h1>
      <h2>Nombre:{peliculasYSeries.title}</h2>
      <h2>Nombre:{peliculasYSeries.name}</h2>
    </div>
  );
};

export default DetallePeliculaYSerie;
