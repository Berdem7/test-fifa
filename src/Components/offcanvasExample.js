import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasExample() {
  return (
    <>
      <Navbar expand="md" variant="dark" className="mb-3 App-header">
        <Container className="col-10 flex justify-items-stretch">
          <Navbar.Brand href="#">
            <img
              className="w-32 md:w-64  "
              src="https://fifa.invescore.mn/asset/image/logo.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            className="border-white "
            aria-controls={`offcanvasNavbar-expand-md}`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3  mt-3">
                <div
                  className="text-white text-2xl font-semibold content-center flex"
                  href="#action1"
                >
                  <img
                    className="w-8"
                    src="https://fifa.invescore.mn/asset/image/user.png"
                    alt=""
                  />
                  <p className="my-auto">Нэвтрэх</p>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
