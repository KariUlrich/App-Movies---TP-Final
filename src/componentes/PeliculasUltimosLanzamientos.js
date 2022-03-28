import useFetchPYS from "../hook/useFetchPYS";
import Listado from "./Listado";
import Loader from "./Loader";
import Paginado from "./Paginado";
import usePaginado from "../hook/usePaginado";
import { useParams } from "react-router-dom";
// import "../styles/PeliculasPopulares.scss";

const PeliculasUltimosLanzamientos = () => {
  const params = useParams();
  const {
    page,
    handleClickNext,
    handleClickPrev,
    handleClickFirstPage,
    handleClickLastPage,
  } = usePaginado("movie", "now_playing");
  const [peliculas, isLoading, totalPages] = useFetchPYS(
    "movie",
    "now_playing",
    params.page
  );

  return (
    <div className="">
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <Listado
          titulo="Películas - Ultimos Lanzamientos"
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

export default PeliculasUltimosLanzamientos;
