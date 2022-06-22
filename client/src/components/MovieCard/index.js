import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import noImage from "../../assets/noImage.png";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";

let pages = { person: "person", movie: "movie", tv: "tvshow" };

let typesColors = { person: "warning", movie: "success", tv: "info" };

export default function MovieCard({ movie }) {
  let navigate = useNavigate();

  const { favorites } = useSelector((state) => state.favorites);


  const dispatch = useDispatch();

  const { addToFavorites, removeFromFavorites } = bindActionCreators(
    actionCreators,
    dispatch
  );

  function onClickDetails(id, media_type) {
    navigate(`/${pages[media_type] ? pages[media_type] : "movie"}/${id}`);
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={
          !(movie.profile_path || movie.poster_path)
            ? noImage
            : movie.media_type === "person"
            ? `https://www.themoviedb.org/t/p/w276_and_h350_face/${movie.profile_path}`
            : `https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`
        }
      />
      <Card.Body>
        <Badge
          bg={
            typesColors[movie.media_type]
              ? typesColors[movie.media_type]
              : "secondary"
          }
        >
          {movie.media_type}
        </Badge>
        <Card.Title>
          {movie.media_type === "person" ? movie.name : movie.original_title}
        </Card.Title>
        <Card.Text>{movie.overview}</Card.Text>

        <Button
          variant="primary"
          onClick={() => onClickDetails(movie.id, movie.media_type)}
        >
          Details
        </Button>
        {favorites.find((fav) => fav.id === movie.id) ? (
          <Button variant="danger" onClick={() => removeFromFavorites(movie)}>
            - Favorites
          </Button>
        ) : (
          <Button
            variant="outline-danger"
            onClick={() => addToFavorites(movie)}
          >
            + Favorites
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
