import React from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'reactstrap';

const Patrocinadores = (props) => {
  return (
    <div className="container-lg mt-5 container-fluid">


    <Container id="patrocinadores" className="flex">
      <div className="pb-80 col-5 bg-white-400">
        <h4 className={`
      pt-20
      
      `}>Patrocinadores</h4>

        <Row xs="1" sm="3" md="1">
          <Col className={`inline-flex`}>
            <a href="#">
              <img className={`w-20`} src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png" alt="Factum" />
            </a>
            <a href="#">
              <img className={`w-20`} src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png" alt="Factum" />
            </a>
            <a href="#">
              <img className={`w-20`} src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png" alt="Factum" />
            </a>
          </Col>
          <Col className={`inline-flex justify-start`}>
            <a href="#">
              <img className={`w-20`} src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png" alt="Factum" />
            </a>
            <a href="#">
              <img className={`w-20`} src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png" alt="Factum" />
            </a>
            <a href="#">
              <img className={`w-20`} src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png" alt="Factum" />
            </a>
          </Col>
        </Row>
      </div>
      <div className="col-7 bg-blue-400 text-white container">
        <h4 className={` pt-20 text-end mr-5
      `}>Agradecimentos</h4>

        <Row xs="1" sm="3" md="1">
          <Col className={`justify-center mr-5 mt-3 ml-5`}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis laudantium praesentium sint id! Soluta beatae doloremque quos repudiandae eos eaque libero tempore corrupti mollitia. Amet possimus quidem</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis laudantium praesentium sint id! Soluta beatae doloremque quos repudiandae eos eaque libero tempore corrupti mollitia. Amet possimus quidem</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis laudantium praesentium sint id! Soluta beatae doloremque quos repudiandae eos eaque libero tempore corrupti mollitia. Amet possimus quidem</p>
           
          </Col>
        </Row>
      </div>



    </Container>
    </div>
  );
}

export default Patrocinadores;