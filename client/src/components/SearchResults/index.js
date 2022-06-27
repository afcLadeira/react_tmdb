import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../MovieCard";
import MySpinner from "../Spinner";
import Badge from "react-bootstrap/esm/Badge";
import { getSearchEndpoint } from "../../constants";
import { useSearchInfo } from "../../api/search";

export default function SearchResults({searchString , multi}) {


  
  const search_url = (multi === null || !searchString) ? null : getSearchEndpoint(multi, searchString)

  const {isLoading , error , data} = useSearchInfo(search_url , searchString , multi)



  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>
  }

  if (isLoading) {
    <MySpinner></MySpinner>
  }


  return (
    <div>
      {data ? (
        <div style={{ textAlign: "center" }}>
          <h3>
            Total results for <Badge bg="primary">{searchString}</Badge>:{" "}
            {data.total_results}
          </h3>
        </div>
      ) : null}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center",
        }}
      >
        {data &&
          data.results.map((item) => (
            <MovieCard key={item.id} movie={item}></MovieCard>
          ))}
      </div>
    </div>
  );
}


