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
        <Carousel>
                     <div className='head-text'>
                      <div className='head-text'>
                      <img src="./Picture1.png"/> 
                          <p className="legend"></p>
                      </div>
                      
                      <div className='text-on-image'>
                        <br></br>
                        
                          <h1><p>In every walk with nature one receives far more than he seeks.</p></h1>
                          {/* <button type="submit" className="btn btn-primary" >
                 View Product 
                </button>
                */}
                        
                      </div>
                      </div>
                      <div className='head-text'>
                      <div className='head-text'>
                      <img src="https://source.unsplash.com/featured/?elephant" />
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
                      <img src="https://source.unsplash.com/featured/?lion" />
                          <p className="legend"></p>
                      </div>
                      <div className='text-on-image'>
                        <h1></h1>
                        
                      </div>
                      </div>
                      <div className='head-text'>
                      <div className='head-text'>
                      <img src="https://source.unsplash.com/featured/?deer" />
                          <p className="legend"></p>
                      </div>
                      <div className='text-on-image'>
                        <h1></h1>
                        
                      </div>
                      </div>
                      <div className='head-text'>
                      <div className='head-text'>
                      <img src="https://source.unsplash.com/featured/?monkey" />
                          <p className="legend"></p>
                      </div>
                      <div className='text-on-image'>
                        <h1></h1>
                        
                      </div>
                      </div>
                      
                  </Carousel>
                    
        </div> 
        </section>
      );
      
    }
  }
  
  export default Home;
