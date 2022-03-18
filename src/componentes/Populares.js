import useFetchPYS from "../hook/useFetchPYS";
import PresentacionPeliculas from "./PresentacionPeliculas";

const Populares = () => {
  const peliculas = useFetchPYS("movie", "popular");
  const series = useFetchPYS("tv", "popular");
  return (
    <div>
      <PresentacionPeliculas
        titulo="Peliculas Populares"
        peliculasYSeries={peliculas}
      />
      <PresentacionPeliculas
        titulo="Series Populares"
        peliculasYSeries={series}
      />
    </div>
  );
};

export default Populares;
