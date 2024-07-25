import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
// import Stack from "react-bootstrap/esm/Stack";
import Nav from "react-bootstrap/Nav";
import {Image} from 'react-bootstrap';

import './footer.css'

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid>
      <Row className="text-white p-4">
        <Col className="m-in-f-logo" sm={4}>
          <div className="footerLogoDiv"> 
            <Image className="fLogo" src={require('../assets/images/rada-exp-logo.png')} alt="company-logo"
               rounded
               width={150}
               height={150}
               />
            <div>
              <h3 className="footeH3">RADA EXPORTS</h3> 
            <p className="footer-p fotSUb">Exporting Excellence in Textile Fibers.</p>
            </div>
          </div>
        </Col>
        <Col sm={4} className="footerLinkCol">
          <Nav
            className="flex-column fs-5 footerLInkCOn"
          >
            <p style={{ fontSize: "19px" }}>Useful Links</p>
            <Nav.Link className="footer-link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="footer-link" href="#about">
              About Us
            </Nav.Link>
            <Nav.Link className="footer-link" href="/raw-cotton">
              Raw Cotton
            </Nav.Link>
            <Nav.Link className="footer-link" href="polyster-fibre">Polyester fibre</Nav.Link>
            <Nav.Link className="footer-link" href="/cotton-waste">Cotton Waste</Nav.Link>
            <Nav.Link className="footer-link" href="/waste">Waste</Nav.Link>
            <Nav.Link className="footer-link" href="/viscose-fiber">Viscose fibre</Nav.Link>
            <Nav.Link className="footer-link" href="/linen-fiber">Linen fibre</Nav.Link>
            <Nav.Link className="footer-link" href="/yarn">Yarn</Nav.Link>
          </Nav>
        </Col>
        <Col sm={3} className="footerContactCol">
          <h4>Contact Us!</h4>
          <p>Address: Ricco Industrial Area 29 Mele, Gulabpura, District Bhilwara (R.J)</p>
          <p>Email: Prateekshastri9@gmail.com</p>
          <p className="phoneNumber">Phone: +917987725348</p>
          <div className="socials">
            <ul>
              <li>
                <a className="whatsappA"
                  href="https://wa.me/7987725348"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              {/* <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a></li> */}
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <p style={{ textAlign: "center", color: "white" }}>
          &copy; All Right Reserved. Rada Exports
        </p>
      </Row>
      {showTopBtn && <div className="go-top" onClick={goTop}></div>}
    </Container>
  );
}

export default AppFooter;

// ref =   https://medium.com/@racosta323/create-a-simple-footer-using-react-bootstrap-58c4371a4ade
