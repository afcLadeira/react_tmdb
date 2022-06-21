import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../../components/MovieCard";
import MySpinner from "../../components/Spinner";
import Badge from "react-bootstrap/esm/Badge";

export default function Results() {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });

  let navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const searchString = searchParams.get("search");

  const { state: params } = useLocation();

  useEffect(() => {
    if (!searchString || !params) {
      navigate("/");
    }

    async function fetchData() {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${
          params.multi === "true" ? "multi" : "movie"
        }?api_key=${
          process.env.REACT_APP_TMDB_API_KEY
        }&language=en-US&query=${searchString}&page=1&include_adult=false`
      );

      setState((prevState) => ({ ...prevState, loading: false, data }));
    }

    fetchData();
  }, [searchString, navigate, params]);

  return (
    <div>
      {state.loading ? (
        <MySpinner></MySpinner>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h3>
            Total results for <Badge bg="primary">{searchString}</Badge>:{" "}
            {state.data.total_results}
          </h3>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center",
        }}
      >
        {state.data &&
          state.data.results.map((item) => (
            <MovieCard key={item.id} movie={item}></MovieCard>
          ))}
      </div>
    </div>
  );
}
