import useFetchPYS from "../hook/useFetchPYS";
import PresentacionPeliculas from "./PresentacionPeliculas";
import Loader from "./Loader";

const UltimosLanzamientos = () => {
  const [peliculas, isLoading] = useFetchPYS("movie", "now_playing");
  const [series, isLoadingseries] = useFetchPYS("tv", "airing_today");

  const isLoadingGeneral = isLoading || isLoadingseries;

  return (
    <div>
      <Loader isLoading={isLoadingGeneral} />
      {!isLoadingGeneral && (
        <>
          <PresentacionPeliculas
            titulo="Ultimos Lanzamientos de Peliculas"
            peliculasYSeries={peliculas}
          />
          <PresentacionPeliculas
            titulo="Ultimos Lanzamientos de Series"
            peliculasYSeries={series}
          />
        </>
      )}
    </div>
  );
};

export default UltimosLanzamientos;
