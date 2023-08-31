import React from "react";
import "./MovieCard.scss";
import { FaStar, FaPlay } from "react-icons/fa";

// import FavoritMovie from "./FavoritMovie";
import { Link } from "react-router-dom";
import { API_IMGS_URL } from "../../config";

export default function MovieCard({ cardSize, curMovie }) {
  const { id, title, poster_path, backdrop_path, vote_average, release_date } = curMovie;
  const movieImg = cardSize === "medium" ? backdrop_path : poster_path;

  return (
    <Link to={`/movie/${id}`} className={`movie-card movie-card--${cardSize}`}>
      <img className="movie-card__img" src={`${API_IMGS_URL}/${movieImg}`} alt={title} />
      <div className="movie-card__content">
        <div className="movie-card__content__rataing">
          <span>
            <FaStar />
          </span>
          <span>{vote_average}</span>
        </div>
        {/* <FavoritMovie curMovie={curMovie} /> */}
        <div className="movie-card__content__info">
          <div className="movie-card__content__info__desc">
            <span className="movie-card__content__info__desc__name">{title}</span>
            <span className="movie-card__content__info__desc__year">{release_date}</span>
          </div>
          <div className="movie-card__content__info__play">
            <FaPlay />
          </div>
        </div>
      </div>
    </Link>
  );
}
