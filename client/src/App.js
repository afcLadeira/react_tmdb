import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import NavBar from "./components/NavBar";
import useAuth from "./hooks/useAuth";
import Router from "./routes";




function App() {

  const {auth} = useAuth()

  return (
    <div>
      
       {auth?.userName && <NavBar></NavBar> }
        <Router></Router>
    
    </div>
  );
}

export default App;


