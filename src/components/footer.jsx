import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Stack from "react-bootstrap/esm/Stack";
import Nav from "react-bootstrap/Nav";
import {Image} from 'react-bootstrap';

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
        <Col className="m-in-f-logo">
          <Stack>
            <Image src={require('../assets/images/rada-exp-logo.png')} alt="company-logo"
               rounded
               width={150}
               height={150}
               />
            {/* <h2 style={{ fontWeight: "600" }}>Rada Exports</h2> */}
            <p className="footer-p">Deals in all kinds of Waste, Yarn and Fibers</p>
          </Stack>
        </Col>
        <Col>
          <Nav
            className="flex-column fs-5"
            style={{ display: "flex", justifyContent: "start" }}
          >
            <p style={{ fontSize: "19px" }}>Useful Links</p>
            <Nav.Link className="footer-link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="footer-link" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="footer-link" href="/raw-cotton">
              Raw Cotton
            </Nav.Link>
            <Nav.Link className="footer-link" href="polyster-fibre">Polyester fibre</Nav.Link>
            <Nav.Link className="footer-link" href="/cotton-waste">Cotton Waste</Nav.Link>
            <Nav.Link className="footer-link" href="/viscose-fiber">Viscose fibre</Nav.Link>
            <Nav.Link className="footer-link" href="/linen-fiber">Linen fibre</Nav.Link>
          </Nav>
        </Col>
        <Col>
          <h4>Contact Us!</h4>
          <p>Address: Ricco industrial area 29 mele gulabpura dist bhilwara</p>
          <p>Email: Prateekshastri9@gmail.com</p>
          <p className="phoneNumber">Phone: +917987725348</p>
        </Col>
        <Col>
          <div className="socials">
            <ul>
              <li>
                <a
                  href="https://wa.me/7987725348"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
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
