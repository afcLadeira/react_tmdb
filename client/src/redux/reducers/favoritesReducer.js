let initialState = {
  userId: null,
  favoriteMovies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "getFavorites":
      return { ...state, ...action.payload };
    case "addFavorite":
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
      };
    case "removeFavorite":
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(
          (fav) => fav.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default reducer;
