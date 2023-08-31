import React from "react";
import "./GridMovies.scss";
import MovieCard from "../MovieCard/MovieCard";
import Error from "../Error/Error";

export default function GridMovies({ title = "movies", movies = [] }) {
  // if there is no movies
  if (!movies || movies.length === 0) return <Error message={"no results founded."} />;

  const moviesElm = movies.map((movie) => <MovieCard key={movie.id} curMovie={movie} />);

  return (
    <div className="grid-movies">
      <h3>{title}</h3>
      <div className="movies-list">{moviesElm}</div>
    </div>
  );
}
