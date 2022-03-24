import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Buscar.scss";
import { BsSearch } from "react-icons/bs";
// import Paginado from "./Paginado";
// import usePaginado from "../hook/usePaginado";

const Buscar = () => {
  const [searchParams, setSearchParams] = useSearchParams({ busqueda: "" });
  const [valorDelInput, setValorDelInput] = useState("");
  // const { page, handleClickNext, handleClickPrev, handleClickFirstPage, handleClickLastPage } = usePaginado();
  // const [series, isLoading, totalPages] = useFetchPYS("tv", "popular", page);

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  const handleClick = () => {
    setSearchParams({ busqueda: valorDelInput });
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
          onChange={handleChange}
          value={valorDelInput}
        ></input>
        <button aria-label="boton buscar" type="submit" onClick={handleClick}>
          {" "}
          <BsSearch />{" "}
        </button>
      </form>
      {/* <Paginado
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
        handleClickFirstPage={handleClickFirstPage}
        handleClickLastPage={handleClickLastPage}
        page={page}
        totalPages={totalPages}
      /> */}
    </div>
  );
};

export default Buscar;
