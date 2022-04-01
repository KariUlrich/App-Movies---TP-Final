import {
  BiFirstPage,
  BiLastPage,
  BiSkipNext,
  BiSkipPrevious,
} from "react-icons/bi";

import "../styles/Paginado.scss";

const Paginado = ({
  handleClickPrev,
  handleClickNext,
  handleClickFirstPage,
  handleClickLastPage,
  page,
  totalPages,
}) => {
  return (
    <div className="botones-paginado">
      <button
        onClick={handleClickFirstPage}
        disabled={page === 1}
        aria-label="boton first page"
      >
        <BiFirstPage className="icono-paginado" />
      </button>
      <button
        onClick={handleClickPrev}
        disabled={page === 1}
        aria-label="boton anterior"
      >
        <BiSkipPrevious className="icono-paginado" />
      </button>
      <span>Página {page}</span>
      <button
        onClick={handleClickNext}
        disabled={totalPages > 500 ? page === 500 : page === totalPages}
        aria-label="boton siguiente"
      >
        <BiSkipNext className="icono-paginado" />
      </button>
      <button
        disabled={totalPages > 500 ? page === 500 : page === totalPages}
        aria-label="boton ultima pagina"
        onClick={() => handleClickLastPage(totalPages > 500 ? 500 : totalPages)}
      >
        <BiLastPage className="icono-paginado" />
      </button>
    </div>
  );
};

export default Paginado;
