import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">RADA EXPORTS</Navbar.Brand> */}
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><Image style={{width:'55px', display:'flex', justifyContent:'center', alignItems:'center' , objectFit:'contain', marginRight:'15px'}} src={require('../assets/images/rada-exp-logo.png')}/><h3 style={{color:'#2B8EC3', position:'relative', top:'10px'}}><b>RADA EXPORTS</b></h3></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/raw-cotton">Raw Cotton</NavDropdown.Item>
              <NavDropdown.Item href="polyster-fibre">Polyester fibre</NavDropdown.Item>
              <NavDropdown.Item href="/cotton-waste">Cotton Waste</NavDropdown.Item>
              <NavDropdown.Item href="/waste">Waste</NavDropdown.Item>
              <NavDropdown.Item href="/viscose-fiber">Viscose fibre</NavDropdown.Item>
              <NavDropdown.Item href="/linen-fiber">Linen fibre</NavDropdown.Item>
              <NavDropdown.Item href="/yarn">Yarn</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;