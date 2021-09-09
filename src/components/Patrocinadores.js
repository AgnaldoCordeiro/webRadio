import React from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'reactstrap';

const Patrocinadores = (props) => {
  return (
    <Container className={`text-center 
    
    `}>
      <h1 className={`
      py-5
      
      `}>Patrocinadores</h1>      

      <Row xs="1" sm="3" md="1">
        <Col className={`inline-flex justify-center`}>
        <a href="#">
          <img className={`w-20`} src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png" alt="Factum"/>
        </a>        
        <a href="#">
          <img className={`w-20`} src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png" alt="Factum"/>
        </a>
        <a href="#">
          <img className={`w-20`} src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png" alt="Factum"/>
        </a>
        </Col>
        <Col className={`inline-flex justify-center`}>
        <a href="#">
          <img className={`w-20`} src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png" alt="Factum"/>
        </a>
        <a href="#">
          <img className={`w-20`} src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png" alt="Factum"/>
        </a>
        <a href="#">
          <img className={`w-20`} src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png" alt="Factum"/>
        </a>
        </Col>        
      </Row>
      

    </Container>
  );
}

export default Patrocinadores;