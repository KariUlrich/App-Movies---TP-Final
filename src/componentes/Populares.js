import { useState, useEffect } from "react";
import PresentacionPeliculas from "./PresentacionPeliculas";

const Populares = () => {
  const [peliculasYSeries, setPeliculasYSeries] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular/?api_key=0f992db40ce22ab302880645bfa455bf&language=es-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPeliculasYSeries(data.results));
  }, []);

  return (
    <PresentacionPeliculas
      titulo="Populares"
      peliculasYSeries={peliculasYSeries}
    />
  );
};

export default Populares;
