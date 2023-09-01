import React from "react";
import "./MoviesSection.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function MoviesSection({ section }) {
  const { sectionName, sectionContent, title } = section;
  const { results } =
    sectionContent; /* 'dates', 'page', 'results', 'total_pages', 'total_results' */
  return (
    <div className="movies-section">
      <div className="movies-section__header">
        <h3 className="movies-section__header__title">{title}</h3>
        <Link to={`movies?list=${sectionName}`} className="btn movies-section__header__btn">
          view more
        </Link>
      </div>
      <div className="movies-section__list">
        <Swiper width={190} spaceBetween={15} loop={true}>
          {results.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard curMovie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
