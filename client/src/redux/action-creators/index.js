export const getFavorites = (data) => {
  return async (dispatch) => {
    dispatch({
      type: "getFavorites",
      payload: data,
    });
  };
};

export const addToFavorites = (item, axiosPrivate) => {
  return async (dispatch, getState) => {
    const { data } = await axiosPrivate.post(
      `/api/favorites/${getState().favorites.userId}`,
      item
    );

    dispatch({
      type: "addFavorite",
      payload: item,
    });
  };
};

export const removeFromFavorites = (item, axiosPrivate) => {
  return async (dispatch, getState) => {
    const { data } = await axiosPrivate.delete(
      `/api/favorites/${getState().favorites.userId}/${item.id}`
    );

    dispatch({
      type: "removeFavorite",
      payload: item,
    });
  };
};
