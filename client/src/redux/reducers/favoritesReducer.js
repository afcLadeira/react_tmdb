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
        favorites: [
          ...state.items.slice(0, action.payload),
          ...state.items.slice(action.payload + 1),
        ],
      };
    default:
      return state;
  }
};



export default reducer