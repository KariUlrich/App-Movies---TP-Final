import useFetchPYS from "../hook/useFetchPYS";
import Listado from "./Listado";
import Loader from "./Loader";
import "../styles/PeliculasPopulares.scss";

const PeliculasPopulares = () => {
  const [peliculas, isLoading] = useFetchPYS("movie", "popular");

  return (
    <div className="listado">
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <Listado titulo="Peliculas Populares" peliculasYSeries={peliculas} />
      )}
    </div>
  );
};

export default PeliculasPopulares;
