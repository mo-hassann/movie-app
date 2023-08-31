import React from "react";

import { useLoaderData } from "react-router-dom";
import Movies from "./Movies";

export default function Favorite() {
  const { favMovies } = useLoaderData();

  return <Movies movies={favMovies} />;
}

export function loader() {
  return { favMovies: [] };
}
