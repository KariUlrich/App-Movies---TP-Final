import { useState, useEffect } from "react";
import { urlBase, apiKey } from "../utils/variables";

const useFetchPYS = (tipo, categoria, page) => {
  const [peliYSeries, setPeliYSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `${urlBase}${tipo}/${categoria}?${apiKey}&language=es-ES&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPeliYSeries(data.results);
        setIsLoading(false);
        setTotalPages(data.total_pages);
      });
  }, [tipo, categoria, page]);

  return [peliYSeries, isLoading, totalPages];
};

export default useFetchPYS;
