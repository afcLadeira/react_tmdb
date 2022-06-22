import favorites from "../../assets/favorite.png";
import logo from "../../assets/movie_icon.png";
import { Link } from "react-router-dom";


export default function NavBar() {
    return <div style={{ width: "100%", display: 'flex', justifyContent: 'space-between' }}>
      <Link title="go to home" to="/">
        <img
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="home" />
      </Link>
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
  