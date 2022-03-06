import DetallePelicula from "./DetallePelicula";
import ListaPeliculasYSeries from "./ListaPeliculasYSeries";

import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <h2>Carrusel</h2>
      <div className="lista-peliculas-series">
        <ListaPeliculasYSeries
          titulo="Peliculas Mejor Puntuadas"
          url="movie/top_rated"
        />
        <ListaPeliculasYSeries
          titulo="Series Mejor Puntuadas"
          url="tv/top_rated"
        />
      </div>
      <DetallePelicula />
    </div>
  );
};

export default Home;
