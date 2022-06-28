import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import noImage from '../../assets/noImage.png'
import { MOVIE_ROUTE, POSTER_URL, TV_ROUTE } from "../../constants";
import { CardSmall, Heading1 } from "../../styles";

export default function PersonCredits({ credits, type }) {
  let navigate = useNavigate();


  if (credits?.cast.length === 0) {
    return null
  }

  return (
    <div>
      <Heading1>{type} credits</Heading1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {credits
          ? credits.cast.map((item) => (
              <CardSmall
                onClick={() =>
                  navigate(
                    `${type === "movie" ? MOVIE_ROUTE : TV_ROUTE}${item.id}`
                  )
                }
                className="zoom"
                style={{ maxWidth: 100 }}
                key={item.credit_id}
              >
                <Image
                  width="100px"
                  src={item.poster_path ? `${POSTER_URL}${item.poster_path}` : noImage}
                ></Image>
                <p>{type === "movie" ? item.title : item.original_name}</p>
                <p>{item.character}</p>
              </CardSmall>
            ))
          : null}
      </div>
    </div>
  );
}
