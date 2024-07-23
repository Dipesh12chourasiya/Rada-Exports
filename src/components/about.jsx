import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/about.webp';

function AppAbout() {
//   const html = 80;
//   const responsive = 95;
//   const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">Learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image className='about-img' src={img1} />
          </Col>
          <Col sm={6}>
            <p style={{marginTop:'22px'}}>Rada Exports is a prominent brand in the textile industry. We began our journey by exporting premium cotton yarns sourced from spinning mills. Expanding our textile industry with innovation we remain committed to delivering products of the highest quality and comfort.</p>
            <p>Our cotton expertise remains at the heart of our business. We offer a comprehensive selection of cotton yarns, carded, combed, and compact ring-spun yarns in diverse coarse and fine counts. We cater to the needs of our clients by providing ply yarns and specialty yarns to meet specific requirements.</p>
            <p>Recognizing the evolving needs of the textile market, Rada Exports has strategically diversified its product portfolio. Beyond premium cotton, we now offer a wide range of fibers including viscose spun, polyester spun, polyester DTY, linen, PVA, blended yarns, and slubs. This allows us to cater to a broader customer base, providing the perfect materials for all their textile creations.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;