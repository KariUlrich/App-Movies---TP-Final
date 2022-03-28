import useFetchPYS from "../hook/useFetchPYS";
import Listado from "./Listado";
import Loader from "./Loader";
import Paginado from "./Paginado";
import usePaginado from "../hook/usePaginado";
import "../styles/PeliculasPopulares.scss";
import { useParams } from "react-router-dom";

const PeliculasPopulares = () => {
  const params = useParams();
  const {
    page,
    handleClickNext,
    handleClickPrev,
    handleClickFirstPage,
    handleClickLastPage,
  } = usePaginado("movie", "popular");
  const [peliculas, isLoading, totalPages] = useFetchPYS(
    "movie",
    "popular",
    params.page
  );

  return (
    <div className="">
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <Listado
          titulo="Películas Populares"
          peliculasYSeries={peliculas}
          tipo="movie"
        />
      )}
      <Paginado
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
        handleClickFirstPage={handleClickFirstPage}
        handleClickLastPage={handleClickLastPage}
        page={page}
        totalPages={totalPages}
      />
    </div>
  );
};

export default PeliculasPopulares;
