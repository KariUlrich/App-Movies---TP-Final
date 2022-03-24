import { useState, useEffect } from "react";

const useFetchPYS = (tipo, categoria, page) => {
  const [peliYSeries, setPeliYSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/${tipo}/${categoria}?api_key=0f992db40ce22ab302880645bfa455bf&language=es-ES&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPeliYSeries(data.results);
        setIsLoading(false);
        setTotalPages(data.total_pages);
      });
  }, [page]);

  return [peliYSeries, isLoading, totalPages];
};

export default useFetchPYS;
