import useFetchPYS from "../hook/useFetchPYS";
import Listado from "./Listado";
import Loader from "./Loader";
import Paginado from "./Paginado";
import usePaginado from "../hook/usePaginado";
import { useParams } from "react-router-dom";

const SeriesUltimosLanzamientos = () => {
  const params = useParams();
  const {
    page,
    handleClickNext,
    handleClickPrev,
    handleClickFirstPage,
    handleClickLastPage,
  } = usePaginado("tv", "popular");
  const [series, isLoading, totalPages] = useFetchPYS(
    "tv",
    "popular",
    params.page
  );

  return (
    <div className="">
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <Listado
          titulo="Series - Ultimos Lanzamientos"
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

export default SeriesUltimosLanzamientos;
