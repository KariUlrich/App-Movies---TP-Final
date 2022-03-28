import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Buscar.scss";
import { BsSearch } from "react-icons/bs";
import { urlBase, apiKey } from "../utils/variables";
import Listado from "./Listado";

const BuscarPelicula = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ query: "" });
  const [valorDelInput, setValorDelInput] = useState("");

  useEffect(() => {
    if (searchParams.get("query")) {
      fetch(
        `${urlBase}search/movie/?${apiKey}&query=${searchParams.get(
          "query"
        )}&language=es-ES&page=1`
      )
        .then((res) => res.json())
        .then((data) => {
          setPeliculas(data.results);
        });
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleClick = () => {
    setSearchParams({ query: valorDelInput });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <h3>Busca tu película</h3>
        <input
          className="input-peli"
          type="text"
          placeholder="ingresa el nombre..."
          onChange={handleChange}
          value={valorDelInput}
        ></input>
        <button aria-label="boton buscar" type="submit" onClick={handleClick}>
          {" "}
          <BsSearch />{" "}
        </button>
      </form>
      <Listado titulo={""} peliculasYSeries={peliculas} tipo="movie" />
    </div>
  );
};

export default BuscarPelicula;
