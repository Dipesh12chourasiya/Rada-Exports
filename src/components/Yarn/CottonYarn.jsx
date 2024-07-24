import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';

import './CottonYarn.css';

const Yarn = () => {
  return (
    <Container style={{marginTop:'55px'}}>
      <Row>
          <div className="title-holder" style={{ marginTop: "45px" }}>
            <h2>Yarn</h2>
          </div>
          <Col sm={4} className="mb">
            <div className='colDataDiv'>
              <div
                className="imgCont"
              >
                <Image src={require("../../assets/yarn/cottonYarn.jpeg")} />
              </div>
              <div className="">
                <h3
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Cotton Yarn
                </h3>
                <p className="pcenter">
                  Open end - 2/1 - 20/1 , Ring spun - 6/1 - 60/1
                </p>
              </div>
            </div>
          </Col>
          <Col sm={4} className="mb">
            <div className="portfolio-wrapper">
              <div className="colDataDiv">
              <div
                className="imgCont"
              >
                <Image src={require("../../assets/yarn/viscoseYarn.jpeg")} />
              </div>
              <div className="">
                <h3
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Viscose Yarn
                </h3>
                <p className="pcenter">
                  20/1 - 60/1 , Cotton viscose 35:65 blend , Polyster viscose
                  35:65 blend
                </p>
              </div>
              </div>
            </div>
          </Col>
          <Col sm={4} className="mb">
            <div className="portfolio-wrapper">
              <div className="colDataDiv">
              <div
                className="imgCont"
              >
                <Image src={require("../../assets/yarn/slubYarn.jpeg")} />
              </div>
              <div className="">
                <h3
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Slub Yarn{" "}
                </h3>
                <p className='pcenter'>
                  Slub yarn, Open end yarn slub, 6/1 -20/1, Ring spun yarn slub,
                  6/1 - 60/1
                </p>
              </div>
              </div>
            </div>
          </Col>
          <Col sm={4} className="mb">
            <div className="portfolio-wrapper">
              <div className="colDataDiv">
              <div
                className="imgCont"
              >
                <Image src={require("../../assets/yarn/Tfo.jpeg")} />
              </div>
              <div className="">
                <h3
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Tfo Yarn
                </h3>
                <p className='pcenter'>
                  Tfo yarn, Any count we can make it, 2ply , 3 ply , 4 ply, Or
                  as per the requirements
                </p>
              </div>
              </div>
            </div>
          </Col>
          <Col sm={4} className="mb">
            <div className="portfolio-wrapper">
              <div className="colDataDiv">
              <div
                className="imgCont"
              >
                <Image src={require("../../assets/yarn/polyesterYarn.jpeg")} />
              </div>
              <h3
                style={{
                  backgroundColor: "white",
                  color: "black",
                  textAlign: "center",
                }}
              >
                Polyster Yarn
              </h3>
              <p className='pcenter'>
                Count( 15/1 - 60/1 ), 100% polyster, Cotton polyester, 35:65
                blend, Viscose polyester, 35:65 blend
              </p>
              </div>
            </div>
          </Col>
          <Col sm={4} className="mb">
            <div className="portfolio-wrapper">
              <div className="colDatadiv">
              <div
                className="imgCont"
              >
                <Image style={{position:'relative', left:'79px'}} src={require("../../assets/yarn/Linenyarn.jpeg")} />
              </div>
              <div className="">
                <h3
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Linen Yarn
                </h3>
                <p className='pcenter'>
                  Count 5 lea - 120 lea , Blend with Linen/ polyster, Linen
                  /cotton , Linen/ silk , Natural , bleached and multifold yarn
                  available.
                </p>
              </div>
              </div>
            </div>
          </Col>

          <Col sm={6}>
            <div className='dtyyarn'>
              <Image src={require("../../assets/yarn/dtyYarn.jpeg")} />
            </div>
            <h3
              style={{
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
              }}
            >
              Dty Yarn
            </h3>
          </Col>
          <Col sm={6} style={{ display: "flex", alignItems: "center" }}>
            <div className='dtyText'>
              <p>Dull yarn count</p>
              <p>
                50/72,75/72,100/144,150/96,150/144
              </p>
              <p>Semi dull yarn:</p>
              <p>30/48,50/72,50/144,75/72,100/96,</p>
              <p>100/144,150/96,150/144,200/288</p>
            </div>
          </Col>
        </Row>
    </Container>
  )
}

export default Yarn;
