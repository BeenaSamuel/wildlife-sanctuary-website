import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='home'>
        <div>
          <div className="carousel-wrapper">
            <Carousel className="carousel">
              <div className='head-text'>
                <div className='head-text'>
                  <img src="./Picture1.png" alt="Nature" />
                  <p className="legend"></p>
                </div>
                <div className='text-on-image'>
                  <br></br>
                  <h1><p>In every walk with nature one receives far more than he seeks.</p></h1>
                </div>
              </div>
              <div className='head-text'>
                <div className='head-text'>
                  <img src="https://source.unsplash.com/featured/?elephant" alt="Elephant" />
                  <p className="legend"></p>
                </div>
                <div className='text-on-image1'>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <h1><small><p>The greatness of a nation and its moral progress can be judged by the way its animals are treated.</p></small></h1>
                </div>
              </div>
              <div className='head-text'>
                <div className='head-text'>
                  <img src="https://source.unsplash.com/featured/?lion" alt="Lion" />
                  <p className="legend"></p>
                </div>
                <div className='text-on-image'>
                  <h1></h1>
                </div>
              </div>
              <div className='head-text'>
                <div className='head-text'>
                  <img src="https://source.unsplash.com/featured/?deer" alt="Deer" />
                  <p className="legend"></p>
                </div>
                <div className='text-on-image'>
                  <h1></h1>
                </div>
              </div>
              <div className='head-text'>
                <div className='head-text'>
                  <img src="https://source.unsplash.com/featured/?monkey" alt="Monkey" />
                  <p className="legend"></p>
                </div>
                <div className='text-on-image'>
                  <h1></h1>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-about">
              <h3>About Us</h3>
              <p>
                Website for conserve wildlife by improving tourism and create a awareness about the animal,
                people can donate for the animals also
              </p>
            </div>
            <div className="footer-copyright">
              <p>© 2023 Your Company. All rights reserved.</p>
              <br></br>
              <br></br>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Home;
