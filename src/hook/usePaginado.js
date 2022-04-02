import { useState } from "react";
import { useNavigate } from "react-router-dom";

const usePaginado = (tipo, categoria) => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  const handleClickLastPage = (totalPages) => {
    setPage(totalPages);
    navigate(`/${tipo}/${categoria}/page/${totalPages}`);
  };

  const handleClickFirstPage = () => {
    setPage(1);
    navigate(`/${tipo}/${categoria}/page/${1}`);
  };

  const handleClickNext = () => {
    setPage(page + 1);
    navigate(`/${tipo}/${categoria}/page/${page + 1}`);
  };
  const handleClickPrev = () => {
    setPage(page - 1);
    navigate(`/${tipo}/${categoria}/page/${page - 1}`);
  };

  return {
    page: page,
    handleClickNext: handleClickNext,
    handleClickPrev: handleClickPrev,
    handleClickFirstPage: handleClickFirstPage,
    handleClickLastPage: handleClickLastPage,
  };
};

export default usePaginado;
