import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Headers = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
     <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-secondary">Radio MCR Web</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Quem Somos</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Como Somos</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Serviços</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Contato</a></li>
        </ul>

        
      </div>
    </div>
  </header>
    </div>
  );
}


export default Headers;