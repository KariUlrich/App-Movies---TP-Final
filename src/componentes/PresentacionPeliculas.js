const PresentacionPeliculas = ({ titulo, peliculas }) => {
  return (
    <div>
      <h1>{titulo}</h1>
      {peliculas.map((pelicula) => (
        <h3>{pelicula.title}</h3>
      ))}
    </div>
  );
};

export default PresentacionPeliculas;
