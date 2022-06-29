import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";
import { POSTER_URL } from "../../constants";
import { currencyFormatter } from "../../helpers";
import { Heading2 } from "../../styles";

export default function MovieDetails({ data }) {
  const { favoriteMovies } = useSelector((state) => state.favorites);

  const isFavorite = favoriteMovies.findIndex((fav) => fav.id === data.id) !== -1;

  return (
    <div>
      {data ? (
        <div style={{ padding: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Heading2>{data.title}</Heading2>
              <div>{data.genres.map((g) => g.name).join(", ")}</div>
            </div>
            <div>
              <a href={data.homepage}>{data.homepage}</a>
            </div>
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div>
              <Image src={`${POSTER_URL}${data.poster_path}`}></Image>
            </div>
            <div style={{ maxWidth: 600 }}>
              <p>
                Original title:{" "}
                <span style={{ fontSize: "1.5em" }}>{data.original_title}</span>
              </p>
              <p style={{ fontSize: "1.3em" }}>{data.tagline}</p>
              <p>{data.overview}</p>
              <p>Language: {data.original_language}</p>
              <p>Runtime: {data.runtime}m</p>
              <p>Release: {data.release_date}</p>
              <p>
                Budget:{" "}
                {data.budget ? currencyFormatter.format(data.budget) : "-"}{" "}
              </p>
              <p>
                Productions:{" "}
                {data.production_companies.map((comp) => comp.name).join(", ")}
              </p>
              <p>
                Rating: {data.vote_average} ({data.vote_count})
              </p>
              {isFavorite ? <Badge bg="danger">favorite</Badge> : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
