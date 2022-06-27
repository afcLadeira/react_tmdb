import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import noImage from "../../assets/noImage.png";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
import { PAGES, POSTER_URL, PROFILE_URL, TYPESCOLORS } from "../../constants";
import AddMovieToList from "../AddMovieToList";

export default function MovieCard({ movie }) {
  let navigate = useNavigate();

  const { favorites } = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  const { addToFavorites, removeFromFavorites } = bindActionCreators(
    actionCreators,
    dispatch
  );

  function onClickDetails(id, media_type) {
    navigate(`/${PAGES[media_type] ? PAGES[media_type] : "movie"}/${id}`);
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={
          !(movie.profile_path || movie.poster_path)
            ? noImage
            : movie.media_type === "person"
            ? `${PROFILE_URL}${movie.profile_path}`
            : `${POSTER_URL}${movie.poster_path}`
        }
      />
      <Card.Body>
        <Badge
          bg={
            TYPESCOLORS[movie.media_type]
              ? TYPESCOLORS[movie.media_type]
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
      <AddMovieToList movie={movie}></AddMovieToList>
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
