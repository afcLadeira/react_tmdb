import { HOMEPAGE_URL } from "./homepage";

export const API_URl = "https://api.themoviedb.org/";

export const TMDB_BASE_URL = 'https://www.themoviedb.org/'

export const API_KEY = "";



export const API_WRAPPER_URL = process.env.NODE_ENV === 'production' ? `${HOMEPAGE_URL}/api/tmdb` : "http://localhost:3001/api/tmdb"


//export const API_MOST_POPULAR_DIRECT = `${API_URl}3/movie/popular?api_key=${API_KEY}`;
export const API_MOST_POPULAR= `${API_WRAPPER_URL}/mostpopular`;

//TV
export const _getTVDetailsEndpoint = (id) => `${API_URl}3/tv/${id}?api_key=${API_KEY}&language=en-US`;

export const getTVDetailsEndpoint = (id) => `${API_WRAPPER_URL}/tv/${id}`;

export const _getTVCreditsEndpoint = (id) => `${API_URl}3/tv/${id}/credits?api_key=${API_KEY}&language=en-US`;

export const getTVCreditsEndpoint = (id) => `${API_WRAPPER_URL}/tv/${id}/credits`;
//MOVIE
export const _getMovieDetailsEndpoint = (id) =>
  `${API_URl}3/movie/${id}?api_key=${API_KEY}&language=en-US`;

export const getMovieDetailsEndpoint = (id) =>
  `${API_WRAPPER_URL}/movie/${id}`;

export const _getMovieCreditsEndpoint = (id) =>
  `${API_URl}3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
export const getMovieCreditsEndpoint = (id) =>
  `${API_WRAPPER_URL}/movie/${id}/credits`;
//PERSON
export const _getPersonDetailsEndpoint = (id) =>
  `${API_URl}3/person/${id}?api_key=${API_KEY}&language=en-US`;

export const getPersonDetailsEndpoint = (id) =>
  `${API_WRAPPER_URL}/person/${id}`;

export const _getPersonTVCreditsEnpoint = (id) =>
  `${API_URl}3/person/${id}/tv_credits?api_key=${API_KEY}&language=en-US`;

export const getPersonTVCreditsEnpoint = (id) =>
  `${API_WRAPPER_URL}/person/${id}/tv_credits`;

export const _getPersonMovieCreditsEnpoint = (id) =>
  `${API_URl}3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`;
  
export const getPersonMovieCreditsEnpoint = (id) =>
  `${API_WRAPPER_URL}/person/${id}/movie_credits`;
//SEARCH
export const _getSearchEndpoint = (multi, searchString) =>
  `${API_URl}3/search/${
    multi === true? "multi" : "movie"
  }?api_key=${API_KEY}&language=en-US&query=${searchString}&page=1&include_adult=false`;

  export const getSearchEndpoint = (multi, searchString) =>
  `${API_WRAPPER_URL}/search/${
    multi === true? "multi" : "movie"
  }?query=${searchString}`;

export const POSTER_URL = `${TMDB_BASE_URL}/t/p/w440_and_h660_face/`;

export const PROFILE_URL = `${TMDB_BASE_URL}/t/p/w276_and_h350_face/`;

// ROUTES
export const RESULTS_ROUTE = "/results?search=";

export const PERSON_ROUTE = "/person/";

export const MOVIE_ROUTE = "/movie/";

export const TV_ROUTE = "/tvshow/";

export const MYLISTS_ROUTE = "/mylists"
// END OF ROUTES


export const PAGES = { person: "person", movie: "movie", tv: "tvshow" };

export const TYPESCOLORS = { person: "#314d63", movie: "#8fb9ab", tv: "#f08976" };
