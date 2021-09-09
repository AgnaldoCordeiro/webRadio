import React, { useState } from 'react';
import Player from './Player'

const Headers = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
     <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="../pages/index" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"></use></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="../pages/index" className="nav-link px-2 text-secondary">Radio MCR Web</a></li>
          <li><a href="#quemsomos" className="nav-link px-2 text-white">Quem Somos</a></li>
          <li><a href="#comosomos" className="nav-link px-2 text-white">Como Somos</a></li>
          <li><a href="#equipe" className="nav-link px-2 text-white">Equipe</a></li>
          <li><a href="#patrocinadores" className="nav-link px-2 text-white">Patrocinadores</a></li>
          <li><a href="#contact" className="nav-link px-2 text-white">Contato</a></li>
        </ul>
        <Player/>
        
      </div>
    </div>
  </header>
    </div>
  );
}


export default Headers;