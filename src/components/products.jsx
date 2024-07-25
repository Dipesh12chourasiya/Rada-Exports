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
    title: "Polyester Fibre",
    subtitle: "The foundation of soft clothing",
  },
  {
    id: 3,
    link: "/cotton-waste",
    image: require("../assets/yarn/CottonWasteC.jpeg"),
    title: "Cotton Waste",
    subtitle: "The foundation of soft clothing",
  },
  {
    id: 4,
    link: "/waste",
    image: require("../assets/yarn/WasteC.jpeg"),
    title: "Waste",
    subtitle: "The foundation of soft clothing",
  },
  {
    id: 5,
    link: "/viscose-fiber",
    image: require("../assets/images/viscose-fiber.jpeg"),
    title: "Viscose Fibre",
    subtitle: "The foundation of soft clothing",
  },
  {
    id: 6,
    link: "/linen-fiber",
    image: require("../assets/images/linen-fiber.jpeg"),
    title: "Linen Fibre",
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
              <Col className="ColmDiv" sm={4} key={product.id}>
                <div className="portfolio-wrapper">
                  <a href={product.link}>
                    <Image src={product.image} />
                    <div className="label text-center">
                      <h3 style={{fontWeight:'600'}}>{product.title}</h3>
                    </div>
                  </a>
                  <h3
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      fontWeight:'600',
                      margin:'12px 0'
                    }}
                  >
                    {product.title}
                  </h3>
                </div>
              </Col>
            );
          })}

          {/* //For Yarn  */}
          <Col className="ColmDiv" sm={4} >
                <div className="portfolio-wrapper">
                  <a href="/yarn">
                    <Image src={require('../assets/images/Yarn-Section.jpg')} />
                    <div className="label text-center">
                      <h3 style={{fontWeight:'600'}}>Yarn</h3>
                    </div>
                  </a>
                  <h3
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      fontWeight:'600',
                      margin:'12px 0'
                    }}
                  >
                    Yarn
                  </h3>
                </div>
              </Col>
        </Row>
        
      </Container>
    </section>
  );
}

export default AppProducts;
