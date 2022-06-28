import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import noImage from "../../assets/noImage.png";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
import { PAGES, POSTER_URL, PROFILE_URL, TYPESCOLORS } from "../../constants";
import AddMovieToList from "../AddMovieToList";
import { Ribbon } from "../../styles";
import { useTheme } from "styled-components";

export default function MovieCard({ movie }) {
  let navigate = useNavigate();
  let theme = useTheme();
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
      <Card.Body style={{ backgroundColor: theme.background }}>
        <Ribbon
          color={
            TYPESCOLORS[movie.media_type]
              ? TYPESCOLORS[movie.media_type]
              : "#8fb9ab"
          }
        >
          {movie.media_type ? movie.media_type : "movie"}
        </Ribbon>

        <Card.Title>
          <p>
            {movie.media_type === "person" ? movie.name : movie.original_title}
          </p>
        </Card.Title>
        <Card.Text>
          <p>{movie.overview}</p>
        </Card.Text>

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
