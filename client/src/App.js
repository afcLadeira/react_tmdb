import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import NavBar from "./components/NavBar";
import Router from "./routes";


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
        <NavBar></NavBar>
        <Router></Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;


