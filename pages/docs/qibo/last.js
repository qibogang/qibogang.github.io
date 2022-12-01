import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import styled from 'styled-components'
import DropNav from '../../../components/DropNav'
import Footer from '../../../components/Footer'

const Hero = styled.div`
  height: 94vh;
  display: flex;
  justify-content: center;
  background: #fff;
  align-items: center;
  padding-right: 0;
  padding-left: 0;
`


export default function Documentation() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Qibo Documentation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head> 
      <DropNav/>
      <Hero>
        
        <iframe 
          src="https://qibogang.github.io/qibo/" 
          title="Qibo docs"
          width='100%'
          height='100%'
          frameBorder="0">
        </iframe>   
      </Hero>
      <Footer/>
    </div>
  )
}