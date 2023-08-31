import React, { useContext, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ctx } from "../../layouts/Main/Main";

export default function FavoritMovie(id, isFavorite, setIsfavorite) {
  const { state, setState } = useContext(ctx);
  const { favoriteMovies } = state;

  useEffect(() => {
    setIsfavorite && setIsfavorite(favoriteMovies.includes(id));
  }, [favoriteMovies]);

  console.log(setIsfavorite, typeof setIsfavorite);

  const addMovieToFavorits = (e) => {
    e.stopPropagation();
    setState((curState) =>
      curState.favoriteMovies.includes(id)
        ? curState.filter((curId) => curId !== id)
        : [curState, id]
    );
  };
  console.log(state);

  return (
    <div className="movie-card__content__fav" onClick={addMovieToFavorits}>
      {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
    </div>
  );
}
