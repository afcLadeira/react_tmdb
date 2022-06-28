import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard";
import { Heading1 } from "../../styles";

export function FavoritesPage() {
  
  const { favorites } = useSelector((state) => state.favorites);

  return (
    <div>
      <Heading1>My Favorites</Heading1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center",
        }}
      >
        {favorites &&
          favorites.map((item) => (
            <MovieCard key={item.id} movie={item}></MovieCard>
          ))}
      </div>
    </div>
  );
}
