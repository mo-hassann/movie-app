import React from "react";
import "./MoviesSection.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function MoviesSection({ type, title, movies }) {
  return (
    <div className="movies-section">
      <div className="movies-section__header">
        <h3 className="movies-section__header__title">{title}</h3>
        <Link to={`movies?type=${type}`} className="btn movies-section__header__btn">
          view more
        </Link>
      </div>
      <div className="movies-section__list">
        <Swiper width={190} spaceBetween={15} loop={true}>
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard curMovie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
