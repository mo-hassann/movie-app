import React from "react";
import "./MoviesSection.scss";

import ReviewMovieSection from "./ReviewMovieSection";
import MainMovieSection from "./MainMovieSection";
import Error from "../Error/Error";

export default function MoviesSection({ section }) {
  const { sectionType } = section;

  if (sectionType === "review") return <ReviewMovieSection section={section} />;
  else if (sectionType === "main") return <MainMovieSection section={section} />;
  else return <Error />;
}
