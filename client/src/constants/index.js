export const API_URl = "https://api.themoviedb.org/";

export const TMDB_BASE_URL = 'https://www.themoviedb.org/'

export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const API_MOST_POPULAR = `${API_URl}3/movie/popular?api_key=${API_KEY}`;


//TV
export const getTVDetailsEndpoint = (id) => `${API_URl}3/tv/${id}?api_key=${API_KEY}&language=en-US`;

export const getTVCreditsEndpoint = (id) => `${API_URl}3/tv/${id}/credits?api_key=${API_KEY}&language=en-US`;
//MOVIE
export const getMovieDetailsEndpoint = (id) =>
  `${API_URl}3/movie/${id}?api_key=${API_KEY}&language=en-US`;

export const getMovieCreditsEndpoint = (id) =>
  `${API_URl}3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
//PERSON
export const getPersonDetailsEndpoint = (id) =>
  `${API_URl}3/person/${id}?api_key=${API_KEY}&language=en-US`;

export const getPersonTVCreditsEnpoint = (id) =>
  `${API_URl}3/person/${id}/tv_credits?api_key=${API_KEY}&language=en-US`;

export const getPersonMovieCreditsEnpoint = (id) =>
  `${API_URl}3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`;
//SEARCH
export const getSearchEndpoint = (multi, searchString) =>
  `${API_URl}3/search/${
    multi === true? "multi" : "movie"
  }?api_key=${API_KEY}&language=en-US&query=${searchString}&page=1&include_adult=false`;

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
