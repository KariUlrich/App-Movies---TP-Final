import useFetchPYS from "../hook/useFetchPYS";
import Listado from "./Listado";
import Loader from "./Loader";
// import "../styles/PeliculasPopulares.scss";

const SeriesPopulares = () => {
  const [series, isLoading] = useFetchPYS("tv", "popular");

  return (
    <div className="">
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <Listado titulo="Series Populares" peliculasYSeries={series} />
      )}
    </div>
  );
};

export default SeriesPopulares;
