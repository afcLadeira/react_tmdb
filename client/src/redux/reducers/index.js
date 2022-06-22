import { combineReducers } from 'redux'
import favoritesReducer from "./favoritesReducer"



const reducers = combineReducers({
    favorites : favoritesReducer,
})


export default reducers