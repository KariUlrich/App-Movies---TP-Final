import useFetchPYS from "../hook/useFetchPYS";
import Listado from "./Listado";
import Loader from "./Loader";
// import "../styles/PeliculasPopulares.scss";

const PeliculasUltimosLanzamientos = () => {
  const [peliculas, isLoading] = useFetchPYS("movie", "now_playing");

  return (
    <div className="">
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <Listado
          titulo="Peliculas - Ultimos Lanzamientos"
          peliculasYSeries={peliculas}
        />
      )}
    </div>
  );
};

export default PeliculasUltimosLanzamientos;
