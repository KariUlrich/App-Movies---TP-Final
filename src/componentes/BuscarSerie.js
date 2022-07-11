import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Buscar.scss";
import { BsSearch } from "react-icons/bs";
import { urlBase, apiKey } from "../utils/variables";
import Listado from "./Listado";

const BuscarSerie = () => {
  const [series, setSeries] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "The flash",
  });
  const [valorDelInput, setValorDelInput] = useState("");

  useEffect(() => {
    if (searchParams.get("query")) {
      fetch(
        `${urlBase}search/tv?${apiKey}&query=${searchParams.get(
          "query"
        )}&language=es-ES&page=1`
      )
        .then((res) => res.json())
        .then((data) => setSeries(data.results));
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
        <h3>Busca tu serie</h3>
        <div className="div-busqueda">
          <input
            className="input-peli"
            type="text"
            placeholder="ingresa el nombre..."
            // bien por agregar aria label!
            aria-label="buscar serie"
            onChange={handleChange}
            value={valorDelInput}
          ></input>
          <button aria-label="boton buscar" type="submit" onClick={handleClick}>
            {" "}
            <BsSearch />{" "}
          </button>
        </div>
      </form>
      <Listado titulo={""} peliculasYSeries={series} tipo="tv" />
    </div>
  );
};

export default BuscarSerie;
