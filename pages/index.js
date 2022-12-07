import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import DynNavbar from '../components/DynNavbar'
import Footer from '../components/Footer'
import NextJsCarousel from '../components/Carousel'
import Link from 'next/link'


const FirstHero = styled.div`
  height: 82vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
  background-image: url("/images/home/bg-1.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: relative;
  
  @media (max-width: 768px) {
    padding-bottom: 100px;
  }
`

const SecondHero = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  background-image: url("/images/home/bg-test.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: relative;
`

const PartnersHero = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  background-image: url("/images/home/bg-last.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: relative;

  @media (max-width: 768px) {
    display: flex;
    padding-top: 140%;
  }
`

const GettingStartedHero = styled.div`
  height: 58vh;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 0%;
  background-image: url("/images/home/bg-final.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: relative;

  @media (max-width: 768px) {
    display: flex;
  }
`

const CarouselHero = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
  padding-left: 0%;
  padding-right: 0%;
  padding-bottom: 5%;
  background-image: url("/images/home/bg-carousel.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: relative;

   @media (max-width: 768px) {
    display: flex;
    padding-top: 200px;
    padding-bottom: 200px;
    padding-left: 12%;
    padding-right: 12%;

  }
`

export default function Home() {

  return (
    <div className={styles.container}>

      <Head>
        <title>Qibo Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <DynNavbar/>

      <FirstHero>
      <div>
      <div className='two-posts'>
        <div className='home-card'>
          <img src='/images/home/new-hero.png' alt='/'/>
        </div>
        <div className='home-card'>
          <div className='row-padded-element'>          
            <div className='h1-first'>The open source operating system for quantum hardware</div>
          </div>
          <div className='row-element'>          
            <div className='p-home-first'>Quantum programming, simulation, control and remote access</div>
          </div>
        </div>
      </div>

      </div>
      </FirstHero>

      <SecondHero>
      <div className='in-container'>
        <div className='row-padded-element'  id='OpenEco'>          
          <div className='h1-custom'>An open quantum ecosystem</div>
        </div>
      </div>
      <div className='in-container'>
        <div className='row-element'>       
          <div className='p-home'>Qibo is an end-to-end open source platform for quantum simulation, 
            quantum hardware control and remote access. It has a comprehensive, 
            flexible ecosystem of tools, libraries and community resources that 
            lets researchers and users to quickly deploy quantum powered 
            applications.
          </div>
        </div>
      </div>

      <div className='in-container'>
        <div className='four-posts'>
            <div className='home-card'>
              <div className='img-container'>
                <img src='/images/home/finances_p.png' alt='/'/>
              </div>
              <div className='h3-custom'> Applications </div>
              <div className='p-home-small'> 
                We provide an open source codebase of pre-coded quantum algorithms 
                for applications in quantum machine learning, chemistry, industry among others.
              </div>
            </div>
            <div className='home-card'>
              <div className='img-container'>
                <img src='/images/home/code_p.png' alt='/'/>
              </div>
              <div className='h3-custom'> Algorithms </div>
              <div className='p-home-small'> 
                We offer tutorials and code examples for quantum algorithms that
                can be quickly modified and adapted by developers.
              </div>
            </div>
            <div className='home-card'>
              <div className='img-container'>
                <img src='/images/home/lab_p.png' alt='/'/>
              </div>
              <div className='h3-custom'> Laboratory tools </div>
              <div className='p-home-small'> 
                We support hardware control procedures for laboratories technologies,
                including pulses sequence generation, job submission and results recontruction.
              </div>
            </div>
            <div className='home-card'>
              <div className='img-container'>
                <img src='/images/home/hw_p.png' alt='/'/>
              </div>
              <div className='h3-custom'> Open hardware </div>
              <div className='p-home-small'> 
                We suggest accessible hardware for quantum simulation and hardware implementation.
              </div>
            </div>
        </div>
      </div>
      </SecondHero>


      <CarouselHero>
        <NextJsCarousel/>
      </CarouselHero>

      <GettingStartedHero>

        <div className='home-card'>
          <div className='h1-custom'>
            Getting started!
          </div>
          <div className='two-posts'>
            
            <div className='home-card'>
              <div className='small-container'>
                <img src='/images/home/doc_image.png' alt='/'/>
              </div>
              <Link legacyBehavior href={`/docs/qibo/last`}> 
                <a className='btn-half'> Read the docs </a>
              </Link>
            </div>
              
            <div className='home-card'>
              <div className='small-container'>
                <img src='/images/home/tutorial-image.png' alt='/'/>
              </div>
              <Link legacyBehavior href={`/tutorials`}> 
                <a className='btn-half'> Hands on tutorials </a>
              </Link>
            </div>  
          </div>
        </div>

      </GettingStartedHero>

      <PartnersHero>
        <div className='in-container'>
          <div className='h2-partners'> Partners </div>
          <div className='eight-posts'>
            <div className='home-card'>
              <img src='/images/home/tii.png' alt='/'/>
            </div>
            <div className='home-card'>
                <img src='/images/home/infn.png' alt='/'/>
            </div>
            <div className='home-card'>
              <img src='/images/home/cern.png' alt='/'/>
            </div>
            <div className='home-card'>
              <img src='/images/home/nvidia.png' alt='/'/>
            </div>
            <div className='home-card'>
              <img src='/images/home/qilimanjaro.png' alt='/'/>
            </div>
            <div className='home-card'>
              <img src='/images/home/ihpc.png' alt='/'/>
            </div>
            <div className='home-card'>
              <img src='/images/home/cqt.png' alt='/'/>
            </div>
          </div>
        </div>
      </PartnersHero>

    
      <Footer/>

    </div>
  )
}