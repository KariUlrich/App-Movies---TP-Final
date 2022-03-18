import { useState, useEffect } from "react";

const useFetchPYS = (tipo, categoria) => {
  const [peliYSeries, setPeliYSeries] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${tipo}/${categoria}/?api_key=0f992db40ce22ab302880645bfa455bf&language=es-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPeliYSeries(data.results));
  }, []);

  return peliYSeries;
};

export default useFetchPYS;
