import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";
import { currencyFormatter } from "../../helpers";

export default function MovieDetails({ data }) {


  const { favorites } = useSelector((state) => state.favorites);

  const isFavorite = favorites.findIndex(fav => fav.id === data.id) !== -1


  return (
    <div>
      {data ? (
        <div style={{ padding: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h2>{data.title}</h2>
              <div>{data.genres.map((g) => g.name).join(", ")}</div>
            </div>
            <div>
              <a href={data.homepage}>{data.homepage}</a>
            </div>
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div>
              <Image
                src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${data.poster_path}`}
              ></Image>
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
              { isFavorite ?
              <Badge bg="danger" >favorite</Badge> : null
}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
