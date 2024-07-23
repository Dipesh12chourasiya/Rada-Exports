import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const productsData = [
  {
    id: 1,
    link: "/raw-cotton",
    image: require("../assets/images/raw-cotton.jpg"),
    title: "Raw Cotton",
    subtitle: "The foundation of soft clothing",
  },
  {
    id: 2,
    link: "/polyster-fibre",
    image: require("../assets/images/poly-fiber.jpeg"),
    title: "Polyester fibre",
    subtitle: "The foundation of soft clothing",
  },
  {
    id: 3,
    link: "/cotton-waste",
    image: require("../assets/images/ctn-waste.jpg"),
    title: "Cotton Waste",
    subtitle: "The foundation of soft clothing",
  },
  {
    id: 4,
    link: "/viscose-fiber",
    image: require("../assets/images/viscose-fiber.jpeg"),
    title: "Viscose fibre",
    subtitle: "The foundation of soft clothing",
  },
  {
    id: 5,
    link: "/linen-fiber",
    image: require("../assets/images/linen-fiber.jpeg"),
    title: "Linen fibre",
    subtitle: "The foundation of soft clothing",
  },
];

function AppProducts() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Products</h2>
          <div className="subtitle">
            Evokes a sense of connection to the origin of raw cotton
          </div>
        </div>
        <Row className="portfoliolist">
          {productsData.map((product) => {
            return (
              <Col sm={4} key={product.id}>
                <div className="portfolio-wrapper">
                  <a href={product.link}>
                    <Image src={product.image} />
                    <div className="label text-center">
                      <h3>{product.title}</h3>
                      <p>{product.subtitle}</p>
                    </div>
                  </a>
                  <h3
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    {product.title}
                  </h3>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row>
          <div className="title-holder" style={{ marginTop: "45px" }}>
            <h2>Yarn</h2>
          </div>
          <Col sm={4} className="mb">
            <div>
              <div className="yarnDiv" style={{display:'flex', justifyContent:'center'}}>
                <Image src={require("../assets/images/ctnY.jpeg")} />
              </div>
              <div className="yarnDiv">
                <h3
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Cotton yarn
                </h3>
                <p className="pcenter">
                  Open end - 2/1 - 20/1 , Ring spun - 6/1 - 60/1
                </p>
              </div>
            </div>
          </Col>
          <Col sm={4} className="mb">
            <div className="portfolio-wrapper">
              <div className="yarnDiv" style={{display:'flex', justifyContent:'center'}}>
                <Image src={require("../assets/images/VscosYarn.jpeg")} />
              </div>
              <div className="yarnDiv">
              <h3
                style={{
                  backgroundColor: "white",
                  color: "black",
                  textAlign: "center",
                }}
              >
                Viscose yarn
              </h3>
              <p className="pcenter">
                20/1 - 60/1 , Cotton viscose 35:65 blend , Polyster viscose
                35:65 blend
              </p>
              </div>
            </div>
          </Col>
          <Col sm={4} className="mb">
            <div className="portfolio-wrapper">
              <div className="yarnDiv" style={{display:'flex', justifyContent:'center'}}>
                <Image src={require("../assets/images/slubyarn.jpeg")} />
              </div>
              <div className="yarnDiv">
              <h3
                style={{
                  backgroundColor: "white",
                  color: "black",
                  textAlign: "center",
                }}
              >
                Slub yarn{" "}
              </h3>
              <p>
                Slub yarn, Open end yarn slub, 6/1 -20/1, Ring spun yarn slub,
                6/1 - 60/1
              </p>
              </div>
            </div>
          </Col>
          <Col sm={4} className="mb">
            <div className="portfolio-wrapper">
              <div className="yarnDiv" style={{display:'flex', justifyContent:'center'}}>
                <Image src={require("../assets/images/tfoyarn.jpeg")} />
              </div>
              <div className="yarnDiv">
              <h3
                style={{
                  backgroundColor: "white",
                  color: "black",
                  textAlign: "center",
                }}
              >
                Tfo yarn
              </h3>
              <p>
                Tfo yarn, Any count we can make it, 2ply , 3 ply , 4 ply, Or as
                per the requirements
              </p>
              </div>
            </div>
          </Col>
          <Col sm={4} className="mb">
            <div className="portfolio-wrapper">
            <div className="yarnDiv" style={{display:'flex', justifyContent:'center'}}>
                <Image src={require("../assets/images/polyYarn.jpeg")} />
              </div>
              <h3
                style={{
                  backgroundColor: "white",
                  color: "black",
                  textAlign: "center",
                }}
              >
                Polyster yarn
              </h3>
              <p>
                Count( 15/1 - 60/1 ), 100% polyster, Cotton polyester, 35:65
                blend, Viscose polyester, 35:65 blend
              </p>
            </div>
          </Col>
          <Col sm={4} className="mb">
            <div className="portfolio-wrapper">
            <div className="yarnDiv" style={{display:'flex', justifyContent:'center'}}>
                <Image src={require("../assets/images/Linen yarn.jpeg")} />
              </div>
              <h3
                style={{
                  backgroundColor: "white",
                  color: "black",
                  textAlign: "center",
                }}
              >
                Linen yarn
              </h3>
              <p>
                Count 5 lea - 120 lea , Blend with Linen/ polyster, Linen
                /cotton , Linen/ silk , Natural , bleached and multifold yarn
                available.
              </p>
            </div>
          </Col>

          <Col sm={6}>
            <div style={{display:'flex', justifyContent:'center'}}>
              <Image src={require("../assets/images/dullYarn.jpeg")} />
            </div>
            <h3
              style={{
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
              }}
            >
              Dty yarn
            </h3>
          </Col>
          <Col sm={6} style={{ display: "flex", alignItems: "center" }}>
            <div>
              <p>Dull yarn count</p>
              <p style={{ fontSize: "14px" }}>
                50/72,75/72,100/144,150/96,150/144
              </p>
              <p>Semi dull yarn:</p>
              <p style={{ fontSize: "12px" }}>
                30/48,50/72,50/144,75/72,100/96,100/144,150/96,150/144,200/288
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppProducts;
