import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default class NextJsCarousel extends Component {
    render() {
        return (

            <div>
              <div className='h1-custom'>Built for</div>
              
              <Carousel>

                  <div className='in-container'>
                      <div className='h2-custom'> Users </div>
                    <div className='home-card'>
                      <div className='small-container'>
                        <img src='/images/home/Developers.png' alt='/'/>
                      </div>
                      <div className='p-home-small'> 
                            Qibo provides quantum algorithms for applications in science
                            and industry. Some examples are:
                      </div>
                      <div className='three-posts'>
                        <div className='home-card'>
                          <div className='smaller-container'>
                            <img src='/images/home/check.png' alt='/'/>
                          </div>
                          <div className='p-home-small'>
                            Quantum Circuits for Quantum Machine Learning models.
                          </div>
                        </div>
                        <div className='home-card'>
                          <div className='smaller-container'>
                            <img src='/images/home/check.png' alt='/'/>
                          </div>
                          <div className='p-home-small'>
                             Optimization algorithms based on quantum Annealing.
                          </div>
                        </div>
                        <div className='home-card'>
                          <div className='smaller-container'>
                            <img src='/images/home/check.png' alt='/'/>
                          </div>
                          <div className='p-home-small'>
                            Models for High Energy Physics.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  

                  <div className='in-container'>
                      <div className='h2-custom'> Users </div>
                    <div className='home-card'>
                      <div className='small-container'>
                        <img src='/images/home/Developers.png' alt='/'/>
                      </div>
                      <div className='p-home-small'> 
                            Qibo provides quantum algorithms for applications in science
                            and industry. Some examples are:
                      </div>
                      <div className='three-posts'>
                        <div className='home-card'>
                          <div className='smaller-container'>
                            <img src='/images/home/check.png' alt='/'/>
                          </div>
                          <div className='p-home-small'>
                            Quantum Circuits for Quantum Machine Learning models.
                          </div>
                        </div>
                        <div className='home-card'>
                          <div className='smaller-container'>
                            <img src='/images/home/check.png' alt='/'/>
                          </div>
                          <div className='p-home-small'>
                             Optimization algorithms based on quantum Annealing.
                          </div>
                        </div>
                        <div className='home-card'>
                          <div className='smaller-container'>
                            <img src='/images/home/check.png' alt='/'/>
                          </div>
                          <div className='p-home-small'>
                            Models for High Energy Physics.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  
                  
              </Carousel>
            </div>
        );
    }
};