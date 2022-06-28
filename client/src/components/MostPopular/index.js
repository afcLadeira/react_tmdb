import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useGetMostPopular } from "../../api/popular";
import MovieCard from "../../components/MovieCard";
import { API_MOST_POPULAR } from "../../constants";
import { Heading2 } from "../../styles";
import MySpinner from "../Spinner";

export default function MostPopular() {
  const {
    data,
    error,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetMostPopular(API_MOST_POPULAR);

  useEffect(() => {
    let fetching = false;
    const onScroll = async (event) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
       

        fetching = true;
        if (hasNextPage) {
          await fetchNextPage();
        }

        fetching = false;
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  if (isError) {
    return <Heading2>ERROR {JSON.stringify(error)}</Heading2>;
  }

  if (isLoading) {
    return <MySpinner></MySpinner>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Heading2>Most Popular Movies</Heading2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center",
        }}
      >
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie}></MovieCard>
            ))}
          </React.Fragment>
        ))}
      </div>
      {isFetchingNextPage && <MySpinner></MySpinner>}
    </div>
  );
}

