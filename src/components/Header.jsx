import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">RADA EXPORTS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/raw-cotton">Raw Cotton</NavDropdown.Item>
              <NavDropdown.Item href="polyster-fibre">Polyester fibre</NavDropdown.Item>
              <NavDropdown.Item href="/cotton-waste">Cotton Waste</NavDropdown.Item>
              <NavDropdown.Item href="/viscose-fiber">Viscose fibre</NavDropdown.Item>
              <NavDropdown.Item href="/linen-fiber">Linen fibre</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;