export const addToFavorites = (item) => {

    return (dispatch) => {


        dispatch({
            type:"addFavorite",
            payload: item
        })

    }

}


export const removeFromFavorites = (item) => {

    return (dispatch) => {

        dispatch({
            type:"removeFavorite",
            payload: item
        })

    }

}