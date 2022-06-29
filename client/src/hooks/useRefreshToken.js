import axios from '../api/axios';
import useAuth from './useAuth';
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";
import { useDispatch } from "react-redux";

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const dispatch = useDispatch();

    const { getFavorites } = bindActionCreators(
      actionCreators,
      dispatch
    );
  
    
    const refresh = async () => {

        try {
        const response = await axios.get('/api/refresh', {
            withCredentials: true
        });

        
        setAuth(prev => {
            // console.log(JSON.stringify(prev));
            // console.log(response.data.accessToken);
            return { ...response.data.user }
            //return { ...prev, accessToken: response.data.accessToken }
        });

        //getFavorites({userId: response.data.user.id, favoriteMovies: response.data.favorites})
        getFavorites(response.data.favorites)
        return response.data.accessToken;
        }

        catch(error) {
            setAuth(null)
        }
        
       
    }

    return refresh;
};

export default useRefreshToken;
