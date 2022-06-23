import favorites from "../../assets/favorite.png";
import logo from "../../assets/movie_icon.png";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


export default function NavBar() {


  const {auth} = useAuth()

    return <div style={{ width: "100%", display: 'flex', justifyContent: 'space-between' }}>
      <Link title="go to home" to="/">
        <img
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="home" />
      </Link>
      <Link title="sandbox" to="/sandbox">{auth.userName}</Link>
      <Link title="go to favorites" to="/favorites">
        <img
          src={favorites}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="favorites" />
      </Link>
    </div>;
  }
  