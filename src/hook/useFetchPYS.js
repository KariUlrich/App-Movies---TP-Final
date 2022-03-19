import { useState, useEffect } from "react";

const useFetchPYS = (tipo, categoria) => {
  const [peliYSeries, setPeliYSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/${tipo}/${categoria}/?api_key=0f992db40ce22ab302880645bfa455bf&language=es-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setPeliYSeries(data.results);
        setIsLoading(false);
      });
  }, []);

  return [peliYSeries, isLoading];
};

export default useFetchPYS;
