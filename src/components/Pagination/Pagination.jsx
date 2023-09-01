import React from "react";
import "./Pagination.scss";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

export default function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const totalPages = +searchParams.get("total_pages");

  const handleParamsChange = (key, value) => {
    setSearchParams((prevPrams) => {
      if (value === null) {
        prevPrams.delete(key);
      } else {
        prevPrams.set(key, value);
      }
      return prevPrams;
    });
  };

  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      pageCount={totalPages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={5}
      renderOnZeroPageCount={false}
      onPageChange={({ selected }) => handleParamsChange("page", selected + 1)}
      containerClassName={"pagination"}
      previousLinkClassName={"btn item"}
      nextLinkClassName={"btn item"}
      pageLinkClassName={"btn item"}
      breakLinkClassName={"btn item"}
      activeLinkClassName={"btn item--active"}
    />
  );
}
