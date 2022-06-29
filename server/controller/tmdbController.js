const axios = require("axios").default;

const API_KEY = process.env.TMDB_API_KEY;

const API_URl = "https://api.themoviedb.org/";

const API_MOST_POPULAR = `${API_URl}3/movie/popular?api_key=${API_KEY}`;


const getTVDetailsEndpoint = (id) => `${API_URl}3/tv/${id}?api_key=${API_KEY}&language=en-US`;

const getTVCreditsEndpoint = (id) => `${API_URl}3/tv/${id}/credits?api_key=${API_KEY}&language=en-US`;


const getMovieDetailsEndpoint = (id) =>
  `${API_URl}3/movie/${id}?api_key=${API_KEY}&language=en-US`;

const getMovieCreditsEndpoint = (id) =>
  `${API_URl}3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;


const getPersonDetailsEndpoint = (id) =>
  `${API_URl}3/person/${id}?api_key=${API_KEY}&language=en-US`;

const getPersonTVCreditsEnpoint = (id) =>
  `${API_URl}3/person/${id}/tv_credits?api_key=${API_KEY}&language=en-US`;

 const getPersonMovieCreditsEnpoint = (id) =>
  `${API_URl}3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`;

const getSearchEndpoint = (multi, searchString) =>
  `${API_URl}3/search/${multi}?api_key=${API_KEY}&language=en-US&query=${searchString}&page=1&include_adult=false`;


const getPopular = async (req, res) => {
  let page = req.query.page;

  try {
    let urlPage = page ? "&page=" + page : "";

    let result = await axios.get(`${API_MOST_POPULAR}${urlPage}`);

    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTvDetails = async (req, res) => {
  let {id} = req.params;
  try {

    let result = await axios.get(getTVDetailsEndpoint(id));

    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getTvCredits = async (req, res) => {
  let {id} = req.params;

  try {

    let result = await axios.get(getTVCreditsEndpoint(id));

    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getMovieDetails = async (req, res) => {
  let {id} = req.params;
  try {

    let result = await axios.get(getMovieDetailsEndpoint(id));

    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getMovieCredits = async (req, res) => {
  let {id} = req.params;

  try {

    let result = await axios.get(getMovieCreditsEndpoint(id));

    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getPersonDetails = async (req, res) => {
  let {id} = req.params;
  try {

    let result = await axios.get(getPersonDetailsEndpoint(id));

    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getPersonMovieCredits = async (req, res) => {
  let {id} = req.params;

  try {

    let result = await axios.get(getPersonMovieCreditsEnpoint(id));

    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getPersonTVCredits = async (req, res) => {
  let {id} = req.params;

  try {

    let result = await axios.get(getPersonTVCreditsEnpoint(id));

    res.status(200).json(result.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const search = async (req, res) => {

  let {type} = req.params;
  let {query} = req.query

  try {

    let result = await axios.get(getSearchEndpoint(type,query));

    res.status(200).json(result.data);
  } catch (error) {
  
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getPopular , 
    getTvDetails , 
    getTvCredits , getMovieDetails , getMovieCredits,
    getPersonDetails,getPersonMovieCredits, getPersonTVCredits , search};
