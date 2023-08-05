import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./Navigationbar.css";

const Navigationbar = () => {
  const expand = "lg";
  const navLink = [
    { path: "/", link: "Home" },
    { path: "/kegiatan", link: "Kegiatan" },
    { path: "/About", link: "About" },
  ];

  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        className="main-nav mb-3"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#">RB Community</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Restoe Boemi
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1">
                {navLink.map((link, i) => {
                  return (
                    <NavLink
                      key={i}
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.link}
                    </NavLink>
                  );
                })}
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-light">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
