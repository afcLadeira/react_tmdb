import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import noImage from '../../assets/noImage.png'

export default function PersonCredits({ credits, type }) {
  let navigate = useNavigate();


  if (credits?.cast.length == 0) {
    return null
  }

  return (
    <div>
      <h1>{type} credits</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {credits
          ? credits.cast.map((item) => (
              <div
                onClick={() =>
                  navigate(
                    `${type === "movie" ? "/movie/" : "/tvshow/"}${item.id}`
                  )
                }
                className="zoom"
                style={{ maxWidth: 100 }}
              >
                <Image
                  width="100px"
                  src={item.poster_path ? `https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}` : noImage}
                ></Image>
                <p>{type === "movie" ? item.title : item.original_name}</p>
                <p>{item.character}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
