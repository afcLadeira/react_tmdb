import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PersonCredits from "../../components/PersonCredits";
import PersonDetails from "../../components/PersonDetails";
import MySpinner from "../../components/Spinner";

export default function Person() {

    let {id} = useParams();
    const [state, setState] = useState({loading:true , data: null, tv_credits:null, movie_credits:null , error:null})

    useEffect(() => {

        async function fetchData() {

            let url = `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
            let urlTVCredits = `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
            let urlMovieCredits = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`

            const { data } = await axios.get(url)
           
            const { data : tv_credits } = await axios.get(urlTVCredits)
           
            const { data : movie_credits } = await axios.get(urlMovieCredits)
           
            setState(prevState => ({...prevState , loading:false, data , movie_credits , tv_credits}))

        }
    
        fetchData()
        

    },[id])

    if (state.loading) {
        return <MySpinner></MySpinner>
    }

    return (
    <>
    <PersonDetails data={state.data}></PersonDetails>
     <PersonCredits credits={state.movie_credits} type="movie"></PersonCredits>
     <PersonCredits credits={state.tv_credits} type="tv"></PersonCredits>
    </>
    )

}

