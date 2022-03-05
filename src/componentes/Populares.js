import { useState, useEffect } from "react";
import PresentacionPeliculas from "./PresentacionPeliculas";

const Populares = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular/?api_key=0f992db40ce22ab302880645bfa455bf&language=es-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, []);

  return <PresentacionPeliculas titulo="Populares" peliculas={peliculas} />;
};

export default Populares;
