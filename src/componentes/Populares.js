import useFetchPYS from "../hook/useFetchPYS";
import PresentacionPeliculas from "./PresentacionPeliculas";
import Loader from "./Loader";

const Populares = () => {
  const [peliculas, isLoading] = useFetchPYS("movie", "popular");
  const [series, isLoadingseries] = useFetchPYS("tv", "popular");

  const isLoadingGeneral = isLoading || isLoadingseries;

  return (
    <div>
      <Loader isLoading={isLoadingGeneral} />
      {!isLoadingGeneral && (
        <>
          <PresentacionPeliculas
            titulo="Peliculas Populares"
            peliculasYSeries={peliculas}
          />
          <PresentacionPeliculas
            titulo="Series Populares"
            peliculasYSeries={series}
          />
        </>
      )}
    </div>
  );
};

export default Populares;
