import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layouts/Layout";
import Home, { loader as homeLoader } from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Error from "./components/Error/Error";
import Login, { action as loginAction } from "./pages/Login/Login";
import Register, { action as registerAction } from "./pages/Register/Register";
import Favorite, { loader as favMoviesLoader } from "./pages/Movies/Favorite";
import Latest from "./pages/Movies/Latest";
import Popular from "./pages/Movies/Popular";
import Watchlist from "./pages/Movies/Watchlist";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Home />}
            loader={async () => await homeLoader()}
            errorElement={<Error />}
          />
          <Route path="movies/favorite" element={<Favorite />} loader={favMoviesLoader} />
          <Route path="movies/latest" element={<Latest />} />
          <Route path="movies/popular" element={<Popular />} />
          <Route path="movies/watchlist" element={<Watchlist />} />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="login" element={<Login />} action={loginAction} />
        <Route path="register" element={<Register />} action={registerAction} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}
