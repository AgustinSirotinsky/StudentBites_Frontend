import logo from './logo.png';
import Ja from './Ja.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react';
import { UserContext } from '../components/context/userContext';

export default function NavBarTest ()
{
  const handleLogout = () => {
    setUser(null);
    window.location.href = "/";
  };
  const { user } = React.useContext(UserContext);
  const { setUser } = React.useContext(UserContext);
  const Styles = {Container: {margin: 0, padding: 10, paddingBottom: 0, paddingTop: 0}}
    return (
      <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark">
          <Container fluid style={Styles.Container}>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="start" bg="dark" data-bs-theme="dark">
              <Offcanvas.Header closeButton>
                <img src={Ja} class="rounded-circle" width="60" height="60"/>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h3>{user.Usuario}</h3>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/home">Inicio</Nav.Link>
                  <Nav.Link href="#action2">Notificaciones</Nav.Link>
                  <Nav.Link href="#action2">Mis Reseñas</Nav.Link>
                  <Nav.Link href="#action2">Favoritos</Nav.Link>
                  <Nav.Link href="#action2">Descuentos</Nav.Link>
                  <Button variant="danger" onClick={handleLogout}>
                  Log Out
                  </Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Form className="d-flex mb-0">
              <Form.Control size="sm" class="form-control py-2" type="search" placeholder="Buscar" aria-label="Search"/>
              <Button size="sm" class="btn btn-success border-0" type="button">🔎</Button>
            </Form>
            <Navbar.Brand href="/" style={{ marginRight: "0px" }}>
              <img src={logo} width="40" height="41" className="d-inline-block float-right"/>
            </Navbar.Brand>
          </Container>
        </Navbar>
      ))}
    </>
    );
}