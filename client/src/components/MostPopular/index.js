import { useGetMostPopular } from "../../api";
import MovieCard from "../../components/MovieCard";
import { API_MOST_POPULAR } from "../../constants";
import MySpinner from "../Spinner";

export default function MostPopular() {


  const { data , error , isLoading , isError } = useGetMostPopular(API_MOST_POPULAR)

  
  if (isError) {
    return <h2>ERROR {JSON.stringify(error)}</h2>;
  }

  if (isLoading) {
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
