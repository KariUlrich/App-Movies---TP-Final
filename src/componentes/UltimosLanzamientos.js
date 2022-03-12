import { useState, useEffect } from "react";
import PresentacionPeliculas from "./PresentacionPeliculas";

const UltimosLanzamientos = () => {
  const [peliculasYSeries, setPeliculasYSeries] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing/?api_key=0f992db40ce22ab302880645bfa455bf&language=es-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPeliculasYSeries(data.results));
  }, []);

  return (
    <div>
      <PresentacionPeliculas
        titulo="Ultimos Lanzamientos de Peliculas"
        peliculasYSeries={peliculasYSeries}
        url="movie/latest"
      />
      <PresentacionPeliculas
        titulo="Ultimos Lanzamientos de Series"
        peliculasYSeries={peliculasYSeries}
        url="tv/latest"
      />
    </div>
  );
};

export default UltimosLanzamientos;
