import { QueryClient, QueryClientProvider } from "react-query";
import logo from "./assets/movie_icon.png";
import favorites from "./assets/favorite.png";
import "./App.css";
import Router from "./routes";
import { Link } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <div style={{ width: "100%" , display:'flex' , justifyContent:'space-between'}}>
          <Link title="go to home" to="/">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="home"
            />
          </Link>
          <Link title="go to favorites" to="/favorites">
            <img
              src={favorites}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="favorites"
            />
          </Link>
        </div>
        <Router></Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
