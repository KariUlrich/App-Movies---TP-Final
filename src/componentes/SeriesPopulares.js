import useFetchPYS from "../hook/useFetchPYS";
import Listado from "./Listado";
import Loader from "./Loader";
import Paginado from "./Paginado";
import usePaginado from "../hook/usePaginado";
// import "../styles/PeliculasPopulares.scss";

const SeriesPopulares = () => {
  const {
    page,
    handleClickNext,
    handleClickPrev,
    handleClickFirstPage,
    handleClickLastPage,
  } = usePaginado();
  const [series, isLoading, totalPages] = useFetchPYS("tv", "popular", page);

  return (
    <div className="">
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <Listado
          titulo="Series Populares"
          peliculasYSeries={series}
          tipo="tv"
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

export default SeriesPopulares;
