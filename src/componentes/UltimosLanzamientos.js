import useFetchPYS from "../hook/useFetchPYS";
import PresentacionPeliculas from "./PresentacionPeliculas";

const UltimosLanzamientos = () => {
  const peliculas = useFetchPYS("movie", "now_playing");
  const series = useFetchPYS("tv", "airing_today");

  return (
    <div>
      <PresentacionPeliculas
        titulo="Ultimos Lanzamientos de Peliculas"
        peliculasYSeries={peliculas}
      />
      <PresentacionPeliculas
        titulo="Ultimos Lanzamientos de Series"
        peliculasYSeries={series}
      />
    </div>
  );
};

export default UltimosLanzamientos;
