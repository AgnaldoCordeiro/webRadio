import React, { useState } from 'react';
import Player from './Player'
import Link from 'next/link'



const Headers = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
     <header className="hd-content">
    <div className="container">
      <div className="hd-content-menu">
    
        <a href="#home" className="hd-logo">
        <img className={`w-20 mr-4 `} src="./logo.png"/>
        </a>

        <ul className="hd-ul">
          <li><a href="#home" className="hd-logo-a">Radio MCR Web</a></li>
          <li><a href="#quemsomos" className="hd-li-a">Quem Somos</a></li>
          <li><a href="#comosomos" className="hd-li-a">Como Somos</a></li>
          <li><a href="#equipe" className="hd-li-a">Equipe</a></li>
          <li><a href="#patrocinadores" className="hd-li-a">Patrocinadores</a></li>
          <li><a href="#contact" className="hd-li-a">Contato</a></li>
          <Link href="/noticias">
          <li><a className="hd-li-a">Noticias</a></li>
          </Link>
         
        </ul>
        <div className="hd-play">
        <Player/>

        </div>
        
      </div>
    </div>
        
  </header>
    </div>
  );
}


export default Headers;