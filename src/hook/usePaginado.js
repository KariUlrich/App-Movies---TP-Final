import { useState } from "react";

const usePaginado = () => {
  const [page, setPage] = useState(1);

  const handleClickLastPage = (totalPages) => {
    setPage(totalPages);
  };

  const handleClickFirstPage = () => {
    setPage(1);
  };

  const handleClickNext = () => {
    setPage(page + 1);
  };
  const handleClickPrev = () => {
    setPage(page - 1);
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
