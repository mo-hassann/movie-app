import React from "react";
import "./ReviewSection.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import MovieCard from "../MovieCard/MovieCard";

export default function ReviewSection({ section }) {
  const { sectionContent } = section;
  const { results } =
    sectionContent; /* 'dates', 'page', 'results', 'total_pages', 'total_results' */

  return (
    <div className="review">
      <Swiper
        width={400}
        spaceBetween={15}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {results.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard cardSize="medium" curMovie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
