import axios from "axios";
import { useQuery } from "react-query";
import MovieCard from "../../components/MovieCard";
import MySpinner from "../Spinner";

export default function MostPopular() {
  
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

  const { data, error, isFetching } = useQuery(
    "movies",
    async () => {
      const { data } = await axios.get(url);
      return data;
    }
  );

  if (error) {
    return <h2>ERROR {JSON.stringify(error)}</h2>;
  }

  if (isFetching) {
    return <MySpinner></MySpinner>
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Most Popular Movies</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center",
        }}
      >
        {data?.results?.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
}
