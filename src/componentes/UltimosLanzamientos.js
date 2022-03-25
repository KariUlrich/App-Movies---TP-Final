import useFetchPYS from "../hook/useFetchPYS";
import PresentacionPeliculas from "./PresentacionPeliculas";
import Loader from "./Loader";
import "../styles/UltimosLanzamientos.scss";
import { cortarArrayPeliculas } from "../utils/variables";
import { useState } from "react";

const UltimosLanzamientos = () => {
  const [peliculas, isLoading] = useFetchPYS("movie", "now_playing");
  const [series, isLoadingseries] = useFetchPYS("tv", "airing_today");

  const isLoadingGeneral = isLoading || isLoadingseries;

  return (
    <div className="cargando">
      <Loader isLoading={isLoadingGeneral} />
      {!isLoadingGeneral && (
        <>
          <PresentacionPeliculas
            link={"/movie/now_playing/page/1"}
            titulo="Ultimos Lanzamientos de Peliculas"
            peliculasYSeries={cortarArrayPeliculas(peliculas)}
            tipo="movie"
          />
          <PresentacionPeliculas
            link={"/tv/airing_today/page/1"}
            titulo="Ultimos Lanzamientos de Series"
            peliculasYSeries={cortarArrayPeliculas(series)}
            tipo="tv"
          />
        </>
      )}
    </div>
  );
};

export default UltimosLanzamientos;
