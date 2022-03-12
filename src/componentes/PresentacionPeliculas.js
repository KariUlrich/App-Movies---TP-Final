import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tarjeta from "./Tarjeta";

const PresentacionPeliculas = ({ titulo, peliculasYSeries }) => {
  return (
    <div>
      <h1>{titulo}</h1>
      {peliculasYSeries.map((peliculaYSerie) => (
        <Link to={`/movie/:id/${peliculaYSerie.id}`}>
          <Tarjeta
            key={peliculaYSerie.id}
            titulo={peliculaYSerie.title}
            imagen={`https://image.tmdb.org/t/p/w300/${peliculaYSerie.poster_path}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default PresentacionPeliculas;
