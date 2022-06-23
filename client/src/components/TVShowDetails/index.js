import Image from "react-bootstrap/Image";
import { POSTER_URL } from "../../constants";

export default function TVShowDetails({ data }) {
  return (
    <div>
      {data ? (
        <div style={{ padding: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h2>{data.name}</h2>
              <div>{data.genres.map((g) => g.name).join(", ")}</div>
            </div>
            <div>
              <a href={data.homepage}>{data.homepage}</a>
            </div>
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <div>
              <Image
                src={`${POSTER_URL}${data.poster_path}`}
              ></Image>
            </div>
            <div style={{ maxWidth: 600 }}>
              <p>
                Original title:{" "}
                <span style={{ fontSize: "1.5em" }}>{data.original_name}</span>
              </p>
              <p style={{ fontSize: "1.3em" }}>{data.tagline}</p>
              <p>{data.overview}</p>
              <p>Status: {data.status}</p>
              <p># Seasons: {data.number_of_seasons}</p>
              <p># Episodes: {data.number_of_episodes}</p>
              <p>Last air date: {data.last_air_date}</p>
              <p>
                Rating: {data.vote_average} ({data.vote_count})
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
