import React from "react";
import "./Home.scss";

import ReviewSection from "../../components/ReviewSection/ReviewSection";
import MoviesSection from "../../components/MoviesSection/MoviesSection";

import { Await, defer, useLoaderData } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

import {
  NOW_PLAYING_MOVIES_URL,
  POPULAR_MOVIES_URL,
  TOP_RATED_MOVIES_URL,
  UPCOMING_MOVIES_URL,
} from "../../config";

export default function Home() {
  const { homePageMoviesPromise } = useLoaderData();
  console.log(homePageMoviesPromise);

  function els({ nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies }) {
    return (
      <>
        <ReviewSection movies={nowPlayingMovies} />
        <MoviesSection movies={popularMovies} title={"popular"} />
        <MoviesSection movies={topRatedMovies} title={"top rated"} />
        <MoviesSection movies={upcomingMovies} title={"upcoming"} />
      </>
    );
  }

  return (
    <div className="home-container">
      <React.Suspense fallback={<Loading />}>
        <Await resolve={homePageMoviesPromise}>{els}</Await>
      </React.Suspense>
    </div>
  );
}

export async function loader() {
  const homePageMoviesPromise = getHomePageMovies();
  return defer({ homePageMoviesPromise });
}

async function getHomePageMovies() {
  const [nowPlayingMoviesReq, popularMoviesReq, topRatedMoviesReq, upcomingMoviesReq] = [
    await fetch(NOW_PLAYING_MOVIES_URL),
    await fetch(POPULAR_MOVIES_URL),
    await fetch(TOP_RATED_MOVIES_URL),
    await fetch(UPCOMING_MOVIES_URL),
  ];

  const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] = [
    await nowPlayingMoviesReq.json(),
    await popularMoviesReq.json(),
    await topRatedMoviesReq.json(),
    await upcomingMoviesReq.json(),
  ];

  return {
    nowPlayingMovies: nowPlayingMovies.results,
    popularMovies: popularMovies.results,
    topRatedMovies: topRatedMovies.results,
    upcomingMovies: upcomingMovies.results,
  };
}
