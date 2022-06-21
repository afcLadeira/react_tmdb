import { QueryClient, QueryClientProvider } from "react-query";
import logo from "./assets/movie_icon.png";
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
        <div style={{ width: "100%" }}>
          <Link title="go to home" to="/">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Link>
        </div>
        <Router></Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
