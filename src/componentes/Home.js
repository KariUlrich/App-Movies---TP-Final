import ListaPeliculasYSeries from "./ListaPeliculasYSeries";
import Carousel from "./Carousel";

import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* <p>Home</p> */}
      <Carousel />
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
    </div>
  );
};

export default Home;
