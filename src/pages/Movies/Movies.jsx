import React from "react";
import "./Movies.scss";

import GridMovies from "../../components/GridMovies/GridMovies";
import Pagination from "../../components/Pagination/Pagination";

export default function Movies({ movies }) {
  return (
    <>
      <GridMovies movies={movies} />
      <Pagination />
    </>
  );
}
