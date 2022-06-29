import logo from "../../assets/movie_icon.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { axiosPrivate } from "../../api/axios";
import Toggle from "../ToggleTheme";
import useTheme from "../../hooks/useTheme";
import { Username } from "../../styles";

export default function NavBar() {
  const { auth, setAuth } = useAuth();
  const { theme, themeToggler } = useTheme();

  const navigate = useNavigate();

  const logout = async () => {
    try {
      let response = await axiosPrivate.get("/api/logout");
      setAuth({});
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar
        style={{ height: 60 }}
        // collapseOnSelect
        //expand="lg"
        bg={theme === "light" ? "light" : "dark"}
        variant="light"
      >
        <Container style={{ width: "100%" }}>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="home"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Toggle theme={theme} toggleTheme={themeToggler}></Toggle>
              </Nav.Item>
            </Nav>
            <Nav>
              {auth?.userName && (
                <NavDropdown
                  title={<Username>{auth.userName}</Username>}
                  id="navbarScrollingDropdown"
                >
                 
                  <NavDropdown.Item href="/favorites">
                    My Favorites
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/mylists")}>
                    My Lists
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={async () => logout()}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
