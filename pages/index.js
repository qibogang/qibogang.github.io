import Head from 'next/head'
import Image from 'next/image'
//import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Post from '../components/Post'
import DynNavbar from '../components/DynNavbar'
import Link from 'next/link'

const Hero = styled.div`
  height: 88vh;
  display: flex;
  justify-content: center;
  background: #fff;
  align-items: center;
  padding-bottom: 10px;
`

const Heading = styled.div`
  color: #883b8f;
  font-size: 60px;
  font-weight: 800;
`


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Qibo Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <Image rel="icon" href="/../public/Q.png" />
      </Head>
      <DynNavbar/>
      <Hero>
        <div className='posts'>
          <div className='card'>
            <img src='/images/home/qibo_draw.png' alt='/'/>
            <p> 
              Write your algorithm using the API language, choose the best backend
              for your execution and enjoy our quantum simulation tool. 
            </p>
            <Link legacyBehavior href={`https://github.com/qiboteam/qibo`}> 
                <a className='btn-half'> Source </a>
            </Link>
            <Link legacyBehavior href={`/Docs/Qibo/last`}> 
                <a className='btn-half'> Documentation </a>
            </Link>
          </div>
          <div className='card'>
            <img src='/images/home/qibolab_draw.png' alt='/'/>
            <p> 
              Qibolab contains the hardware deployment procedures: every quantum 
              programming action must be translated in a specific way for make it 
              run on the real quantum hardware. 
            </p>
            <Link legacyBehavior href={`https://github.com/qiboteam/qibolab`}> 
                <a className='btn-half'> Source </a>
            </Link>
            <Link legacyBehavior href={`/Docs/Qibolab/last`}> 
                <a className='btn-half'> Documentation </a>
            </Link>
          </div>
          <div className='card'>
            <img src='/images/home/qibocal_draw.png' alt='/'/>
            <p> 
              Qibocal is a package which provides quantum characterization, validation
              and verification protocols using Qibo and Qibolab.
            </p>
            <Link legacyBehavior href={`https://github.com/qiboteam/qibocal`}> 
                <a className='btn-half'> Source </a>
            </Link>
            <Link legacyBehavior href={`/Docs/Qibocal/last`}> 
                <a className='btn-half'> Documentation </a>
            </Link>
          </div>
        </div>
      </Hero>
    </div>
  )
}




