import React from "react";
import "./Movies.scss";

import GridMovies from "../../components/GridMovies/GridMovies";

export default function Movies({ movies }) {
  return <GridMovies movies={movies} />;
}
