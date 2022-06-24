import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import NavBar from "./components/NavBar";
import useAuth from "./hooks/useAuth";
import Router from "./routes";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

function App() {

  const {auth} = useAuth()

  return (
    <div>
      <QueryClientProvider client={queryClient}>
       {auth?.userName && <NavBar></NavBar> }
        <Router></Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;


