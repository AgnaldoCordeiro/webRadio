import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Headers from '../components/Headers'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer'
import Contact from '..//components/Contact'
import Patrocinadores from '../components/Patrocinadores'
import Quemsomos from '../components/Quemsomos'
import Comosomos from '../components/Comosomos'
import Equipe from '../components/Equipe'
import HomeComponente from '../components/HomeComponente'

export default function Home() {
  return (

    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headers/>
      <HomeComponente/>
      <Quemsomos id="quemsomos"/>
      <Comosomos id="comosomos"/>
      <Equipe id="equipe"/>
      <Patrocinadores id="patrocinadores"/>
      <Contact id="contact"/>   
      
       
      <Footer/>
   
    </div>
  )
}
