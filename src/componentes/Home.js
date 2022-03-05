import DetallePelicula from "./DetallePelicula";
import ListaDePeliculas from "./ListaDePeliculas";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <h2>Carrusel</h2>
      <ListaDePeliculas titulo="Peliculas Populares" url="popular" />
      <ListaDePeliculas titulo="Peliculas Mejor Puntuadas" url="top_rated" />
      <DetallePelicula />
    </div>
  );
};

export default Home;
