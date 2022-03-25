import ListaPeliculasYSeries from "./ListaPeliculasYSeries";
import Carousel from "./Carousel";

import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <div className="lista-peliculas-series">
        <ListaPeliculasYSeries
          titulo="Peliculas Mejor Puntuadas"
          categoria="top_rated"
          tipo="movie"
        />
        <ListaPeliculasYSeries
          titulo="Series Mejor Puntuadas"
          categoria="top_rated"
          tipo="tv"
        />
      </div>
    </div>
  );
};

export default Home;
