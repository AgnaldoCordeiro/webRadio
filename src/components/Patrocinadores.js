import React from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'reactstrap';

const Patrocinadores = (props) => {
  return (
    
    <div className="container-fluid bg-blue-400 text-white py-20" id="patrocinadores">
            <div className="container">
                <div className="row">
                    <div className="col s12 m12 l5 center
                    py-4
                    px-6                                     
                    ">
                      <h1>Patrocinadores</h1>
                      <Row xs="1" sm="3" md="1">
          <Col className={`inline-flex`}>
            <a href="#">
              <img className="imagem-patrocinio" src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png" alt="Factum" />
            </a>
            <a href="#">
              <img className="imagem-patrocinio" src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png" alt="Factum" />
            </a>
            <a href="#">
              <img className="imagem-patrocinio" src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png" alt="Factum" />
            </a>
          </Col>
          <Col className={`inline-flex justify-start`}>
            <a href="#">
              <img className="imagem-patrocinio" src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png" alt="Factum" />
            </a>
            <a href="#">
              <img className="imagem-patrocinio" src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png" alt="Factum" />
            </a>
            <a href="#">
              <img className="imagem-patrocinio" src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png" alt="Factum" />
            </a>
          </Col>
        </Row>
                       
                    </div>
                    <div className="col s12 m12 l7
                    py-5
                    px-9
                    bg-gray-200
                    text-black                    
                    ">
                        <h4 className="pb-2">Agradecimentos</h4>
                        <p><i>Nós, da Radio MCR Web aprendemos que algo se torna muito mais fácil quando pessoas envolvidas acreditam no projeto e princialmente na coerência das ações e pensamentos dos envolvidos.</i></p>
                        <p>Estes anos de existÊncia tornaram nossa radio uma família onde todos buscam o bem comum e adotam práticas e iniciativas. Aprendemos ainda que nada se faz sem apio, sem recursos e sem crédito.</p>
                        <p>Agradecemos ainda a confiança depositada em nosso trabalho e por compartilhar conosco a realização desse sonho e apoiar e patrocinar o projeto.</p>
                        <p>Esperamos ter a honra de continuar contando com a participação e apoio de todos para desenvolermos um projeto ainda mais grandioso.</p>
                   
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Patrocinadores;