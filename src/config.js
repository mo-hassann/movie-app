export const API_KEY = "3c02d3d2c9b47028dfbda83f533a57ce";
export const API_URL = "https://api.themoviedb.org/3";
export const API_IMGS_URL = "https://image.tmdb.org/t/p/w500";

// MOVIE LISTS
export const NOW_PLAYING_MOVIES_URL = `${API_URL}/movie/now_playing?&api_key=${API_KEY}`;
export const POPULAR_MOVIES_URL = `${API_URL}/movie/popular?&api_key=${API_KEY}`;
export const TOP_RATED_MOVIES_URL = `${API_URL}/movie/top_rated?&api_key=${API_KEY}`;
export const UPCOMING_MOVIES_URL = `${API_URL}/movie/upcoming?&api_key=${API_KEY}`;

// export const POPULAR_MOVIES_URL = (pageNum) =>
//   `${API_URL}/movie/popular?&page=${pageNum}&api_key=${API_KEY}`;

// export const LATEST_MOVIES_URL = (pageNum) =>
//   `${API_URL}/movie/now_playing?&page=${pageNum}&api_key=${API_KEY}`;

// export const HIGHEST_RATED_MOVIES_URL = (pageNum) =>
//   `${API_URL}/movie/top_rated?&page=${pageNum}&api_key=${API_KEY}&language=en-US`;

// export const POPULAR_KIDS_MOVIES_URL = (pageNum) =>
//   `${API_URL}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&page=${pageNum}&api_key=${API_KEY}&language=en-US`;

// export const BEST_DRAMAS_MOVIES_URL = (pageNum) =>
//   `${API_URL}/discover/movie?with_genres=18&page=${pageNum}&api_key=${API_KEY}&language=en-US`;

// export const SEARCH_MOVIES_URL = (query) => (pageNum) =>
//   `${API_URL}/search/movie?&query=${query}&page=${pageNum}&api_key=${API_KEY}&language=en-US`;

// export const SEARCH_OPTIONS_URL = (query) =>
//   `https://api.themoviedb.org/3/search/company?api_key=${API_KEY}&query=${query}`;
