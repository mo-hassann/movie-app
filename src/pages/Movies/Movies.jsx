import React from "react";
import "./Movies.scss";

import GridMovies from "../../components/GridMovies/GridMovies";

export default function Movies({ movies }) {
  const moviesPerPage = 10;
  if (movies.length > moviesPerPage) {
    return <GridMovies movies={movies.slice(0, moviesPerPage)} />;
  }

  return <GridMovies movies={movies} />;
}
