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

export default function NavBarTest ()
{
    return (
      <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="start" bg="dark" data-bs-theme="dark">
              <Offcanvas.Header closeButton>
              <img src={Ja} class="rounded-circle" width="60" height="60"/>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h3>Jose Luis</h3>
                  <p>@jluis2003</p>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Inicio</Nav.Link>
                  <Nav.Link href="#action2">Notificaciones</Nav.Link>
                  <Nav.Link href="#action2">Mis Reseñas</Nav.Link>
                  <Nav.Link href="#action2">Favoritos</Nav.Link>
                  <Nav.Link href="#action2">Descuentos</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Form className="d-flex">
              <Form.Control class="form-control py-2 rounded-pill mr-1 pr-5" type="search" placeholder="Search" className="me-2" aria-label="Search"/>
              <span class="input-group-append">
                    <Button class="btn rounded-pill border-0 ml-n5" type="button">🔎</Button>
              </span>
            </Form>
            <Navbar.Brand href="#home" style={{ marginRight: "0px" }}>
              <img src={logo} width="40" height="40" className="d-inline-block float-right"/>
            </Navbar.Brand>
          </Container>
        </Navbar>
      ))}
    </>
    );
}