import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import MovieCard from "../MovieCard/MovieCard";

export default function ReviewMovieSection({ section }) {
  const { sectionContent, cardSize } = section;
  const { results } =
    sectionContent; /* 'dates', 'page', 'results', 'total_pages', 'total_results' */

  return (
    <div className="review">
      <Swiper
        spaceBetween={15}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        width={400}
      >
        {results.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard cardSize={cardSize} curMovie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
