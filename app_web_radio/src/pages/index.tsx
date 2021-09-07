import Conteudo from "../components/Conteudo";
import NavMenu from "../components/NavMenu";

import styles from '../styles/Modal.module.css';




export default function Home() {



  return (
    <div className={styles.container}>
      <NavMenu />  
      <Conteudo/> 
         
      
    </div>
  )
}