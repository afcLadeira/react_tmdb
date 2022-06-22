import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux"




export function FavoritesPage() {

    const favorites = useSelector((state) => state.favorites)

    const dispatch = useDispatch()

    const { removeFromFavorites } = bindActionCreators(actionCreators, dispatch)
    console.log("🚀 ~ file: index.js ~ line 15 ~ FavoritesPage ~ removeFromFavorites", removeFromFavorites)

    console.log(favorites)

    return <div>{JSON.stringify(favorites)}</div>

}