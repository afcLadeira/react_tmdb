let initialState = {
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addFavorite":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "removeFavorite":
      return {
        ...state,
        favorites: state.favorites.filter( fav => fav.id !== action.payload.id)
      };
    default:
      return state;
  }
};



export default reducer