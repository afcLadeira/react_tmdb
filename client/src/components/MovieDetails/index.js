import Image from "react-bootstrap/Image";
import { currencyFormatter } from "../../helpers";

export default function MovieDetails({ data }) {
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
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

let jsonexample = {
  adult: false,
  backdrop_path: "/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
  belongs_to_collection: null,
  budget: 74000000,
  genres: [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 35, name: "Comedy" },
  ],
  homepage: "https://www.thelostcity.movie/",
  id: 752623,
  imdb_id: "tt13320622",
  original_language: "en",
  original_title: "The Lost City",
  overview:
    "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
  popularity: 3360.038,
  poster_path: "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
  production_companies: [
    {
      id: 4,
      logo_path: "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png",
      name: "Paramount",
      origin_country: "US",
    },
    { id: 4258, logo_path: null, name: "Fortis Films", origin_country: "US" },
    {
      id: 123420,
      logo_path: null,
      name: "3dot Productions",
      origin_country: "US",
    },
    {
      id: 121737,
      logo_path: null,
      name: "Exhibit A Film",
      origin_country: "US",
    },
  ],
  production_countries: [
    { iso_3166_1: "US", name: "United States of America" },
  ],
  release_date: "2022-03-24",
  revenue: 164289828,
  runtime: 112,
  spoken_languages: [
    { english_name: "English", iso_639_1: "en", name: "English" },
    { english_name: "French", iso_639_1: "fr", name: "Français" },
  ],
  status: "Released",
  tagline: "The adventure is real. The heroes are not.",
  title: "The Lost City",
  video: false,
  vote_average: 6.8,
  vote_count: 1239,
};
