import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../../components/Navbar'
import styles from '../../../styles/Home.module.css'
import styled from 'styled-components'
import DynNavbar from '../../../components/DynNavbar'

const Hero = styled.div`
  height: 88vh;
  display: flex;
  justify-content: center;
  background: #fff;
  align-items: center;
`

const Heading = styled.div`
  color: #883b8f;
  font-size: 60px;
  font-weight: 800;
`

export default function Documentation() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Qibo papers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <DynNavbar/>
      <Hero>
        
        <iframe 
          //src="https://qibo.readthedocs.io/en/stable/" 
          src="/packages/qibolab/doc/build/html/index.html"
          title="Qibo docs"
          width='100%'
          height='100%'
          frameBorder="0">
        </iframe> 
      </Hero>
    </div>
  )
}