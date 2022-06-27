import favorites from "../../assets/favorite.png";
import logo from "../../assets/movie_icon.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { axiosPrivate } from "../../api/axios";

export default function NavBar() {
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();

  const logout = async () => {
    try {
      let response = await axiosPrivate.get("/api/logout");
      setAuth({});
      navigate("/login");
    } catch (error) {}
  };

  return (
    <>
      <Navbar
        style={{ height: 60 }}
       // collapseOnSelect
        //expand="lg"
        bg="light"
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
              <Nav.Link href="#home"></Nav.Link>
            </Nav>
            <Nav>
              {auth?.userName && (
                <NavDropdown title={auth.userName} id="navbarScrollingDropdown">
                  {/* <NavDropdown.Item href="/sandbox">Sandbox</NavDropdown.Item> */}
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
