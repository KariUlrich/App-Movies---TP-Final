import useFetchPYS from "../hook/useFetchPYS";
import PresentacionPeliculas from "./PresentacionPeliculas";
import Loader from "./Loader";
import "../styles/Populares.scss";
import { cortarArrayPeliculas } from "../utils/variables";

const Populares = () => {
  const [peliculas, isLoading] = useFetchPYS("movie", "popular", "page");
  const [series, isLoadingseries] = useFetchPYS("tv", "popular", "page");

  const isLoadingGeneral = isLoading || isLoadingseries;

  return (
    <div className="cargando">
      <Loader isLoading={isLoadingGeneral} />
      {!isLoadingGeneral && (
        <>
          <PresentacionPeliculas
            link={"/movie/popular/page/1"}
            titulo="Peliculas Populares"
            peliculasYSeries={cortarArrayPeliculas(peliculas)}
            tipo="movie"
          />
          <PresentacionPeliculas
            link={"/tv/popular/page/1"}
            titulo="Series Populares"
            peliculasYSeries={cortarArrayPeliculas(series)}
            tipo="tv"
          />
        </>
      )}
    </div>
  );
};

export default Populares;
