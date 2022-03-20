import useFetchPYS from "../hook/useFetchPYS";
import Listado from "./Listado";
import Loader from "./Loader";
// import "../styles/PeliculasPopulares.scss";

const SeriesUltimosLanzamientos = () => {
  const [series, isLoading] = useFetchPYS("tv", "popular");

  return (
    <div className="">
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <Listado
          titulo="Series - Ultimos Lanzamientos"
          peliculasYSeries={series}
        />
      )}
    </div>
  );
};

export default SeriesUltimosLanzamientos;
