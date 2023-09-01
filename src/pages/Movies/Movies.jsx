import React from "react";
import "./Movies.scss";

import GridMovies from "../../components/GridMovies/GridMovies";

export default function Movies({ movies }) {
  return <GridMovies movies={movies} />;
}

// todo :
// solve home error problem
// making statick page that take the list name and return the list of movies
