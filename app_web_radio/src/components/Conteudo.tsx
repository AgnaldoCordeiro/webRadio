import React from 'react'
import { Container } from 'reactstrap';
import About from '../components/About';
import Jumbo from '../components/Jumbo';
import Contact from './Contact';

const Conteudo = (props) => {
  return (
    <>
      <Container className="themed-container"><Jumbo/></Container>
      <Container className="themed-container" fluid="sm">.container-sm</Container>
      <Container className="themed-container" fluid="md">.container-md</Container>
      <Container className="themed-container" fluid="lg"><About/></Container>
      <Container className="themed-container" fluid="xl"><Contact/></Container>
      <Container className="themed-container" fluid={true}>.container-fluid</Container>
    </>
  );
}

export default Conteudo;