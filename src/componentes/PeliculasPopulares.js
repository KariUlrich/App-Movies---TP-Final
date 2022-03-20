import useFetchPYS from "../hook/useFetchPYS";
import Listado from "./PresentacionPeliculas";
import Loader from "./Loader";
// import "../styles/PeliculasPopulares.scss";

const PeliculasPopulares = () => {
  const [peliculas, isLoading] = useFetchPYS("movie", "popular");
  console.log(useFetchPYS("movie", "popular"));
  console.log(peliculas);

  return (
    <div className="">
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <Listado titulo="Peliculas Populares" peliculasYSeries={peliculas} />
      )}
    </div>
  );
};

export default PeliculasPopulares;
