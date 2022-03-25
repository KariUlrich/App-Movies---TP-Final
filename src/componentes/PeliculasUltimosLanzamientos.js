import useFetchPYS from "../hook/useFetchPYS";
import Listado from "./Listado";
import Loader from "./Loader";
import Paginado from "./Paginado";
import usePaginado from "../hook/usePaginado";
// import "../styles/PeliculasPopulares.scss";

const PeliculasUltimosLanzamientos = () => {
  const {
    page,
    handleClickNext,
    handleClickPrev,
    handleClickFirstPage,
    handleClickLastPage,
  } = usePaginado();
  const [peliculas, isLoading, totalPages] = useFetchPYS(
    "movie",
    "now_playing",
    page
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
