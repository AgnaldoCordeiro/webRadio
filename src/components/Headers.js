import React, { useState } from 'react';
import Player from './Player'


const Headers = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
     <header className="p-3 bg-blue-400 text-primary">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
    
        <a href="#home" className="d-flex align-items-center mb-2 mb-lg-0 text-primary text-decoration-none">
        <img className={`w-20 mr-4 `} src="./logo.png"/>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#home" className="nav-link px-2 text-light">Radio MCR Web</a></li>
          <li><a href="#quemsomos" className="nav-link px-2 text-light">Quem Somos</a></li>
          <li><a href="#comosomos" className="nav-link px-2 text-light">Como Somos</a></li>
          <li><a href="#equipe" className="nav-link px-2 text-light">Equipe</a></li>
          <li><a href="#patrocinadores" className="nav-link px-2 text-light">Patrocinadores</a></li>
          <li><a href="#contact" className="nav-link px-2 text-light">Contato</a></li>
        </ul>
        
        <Player/>
        
      </div>
    </div>
  </header>
    </div>
  );
}


export default Headers;