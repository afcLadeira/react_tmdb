import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard";

export function FavoritesPage() {
  
  const { favorites } = useSelector((state) => state.favorites);

  return (
    <div>
      <h1>My Favorites</h1>
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
