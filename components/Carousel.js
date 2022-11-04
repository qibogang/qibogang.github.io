import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default class NextJsCarousel extends Component {
    render() {
        return (

            <div className='in-container'>
              <div className='h1-custom'>Built for</div>
              
              <Carousel>

                  <div className='in-container'>
                      <div className='h2-custom'> Users </div>
                    <div className='home-card'>
                      <div className='small-container'>
                        <img src='/images/home/USE.png' alt='/'/>
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
                      <div className='h2-custom'> Developers </div>
                    <div className='home-card'>
                      <div className='small-container'>
                        <img src='/images/home/DEV.png' alt='/'/>
                      </div>
                      <div className='p-home-small'> 
                      Developers have access to an end-to-end open source platform 
                      for quantum simulation with a comprehensive, flexible 
                      ecosystem of tools, libraries and community resources.
                      </div>
                      <div className='four-posts'>
                        <div className='home-card'>
                           <div className='smaller-container'>
                            <img src='/images/home/check.png' alt='/'/>
                          </div>
                          <div className='p-home-small'>
                            Large code base of models, tutorial and code examples.
                          </div>
                        </div>
                        <div className='home-card'>
                           <div className='smaller-container'>
                            <img src='/images/home/check.png' alt='/'/>
                          </div>
                          <div className='p-home-small'>
                            Simple interface in Python.
                          </div>
                        </div>
                        <div className='home-card'>
                          <div className='smaller-container'>
                            <img src='/images/home/check.png' alt='/'/>
                          </div>
                          <div className='p-home-small'>
                             Multiple simulation backends for CPU and GPU nodes.
                          </div>
                        </div>
                        <div className='home-card'>
                          <div className='smaller-container'>
                            <img src='/images/home/check.png' alt='/'/>
                          </div>
                          <div className='p-home-small'>
                            Tutorials and documentation for custom model building.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                <div className='in-container'>
                      <div className='h2-custom'> Laboratories </div>
                    <div className='home-card'>
                      <div className='small-container'>
                        <img src='/images/home/LAB.png' alt='/'/>
                      </div>
                      <div className='p-home-small'> 
                        Experimental laboratories development quantum technologies
                        can use Qibo to deploy pre-coded quantum algorithms.
                      </div>
                      <div className='four-posts'>
                        <div className='home-card'>
                           <div className='smaller-container'>
                            <img src='/images/home/check.png' alt='/'/>
                          </div>
                          <div className='p-home-small'>
                            Create custom experimental drivers for custom lab setup.
                          </div>
                        </div>
                        <div className='home-card'>
                           <div className='smaller-container'>
                            <img src='/images/home/check.png' alt='/'/>
                          </div>
                          <div className='p-home-small'>
                            Use existing calibration procedures for experiments.
                          </div>
                        </div>
                        <div className='home-card'>
                          <div className='smaller-container'>
                            <img src='/images/home/check.png' alt='/'/>
                          </div>
                          <div className='p-home-small'>
                             Deploy quantum algorithms easily.
                          </div>
                        </div>
                        <div className='home-card'>
                          <div className='smaller-container'>
                            <img src='/images/home/check.png' alt='/'/>
                          </div>
                          <div className='p-home-small'>
                            Implement communication between the lab server and 
                            instruments, including FPGA code.
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