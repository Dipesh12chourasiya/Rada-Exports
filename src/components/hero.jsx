import Carousel from 'react-bootstrap/Carousel';
import AppAbout from './about';
import AppProducts from './products';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/c3.jpg'),
  },
  {
    id: 2,
    image: require('../assets/images/c2.jpg'),
  },
  {
    id: 3,
    image: require('../assets/images/c1.jpg'),
  }
]

function AppHero() {
  return (
    <div>
      <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />          
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
      
      {/* About Component */}
     <AppAbout />
     <AppProducts />
    </div>
  );
}

export default AppHero;