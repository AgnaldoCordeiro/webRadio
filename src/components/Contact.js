import { Container } from "reactstrap";
import Formulario from '../components/Formulario'


export default function Contact(){
    return(
        <div className={`bg-blue-400 text-white`}>

        <Container className="containe">
        <div className={`justify-content
        py-5 px-0
        m-0`}>
            <div className="row">
          <div className="col-12">
            <h5>Radio Web MCR</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><p> Av. .....</p></li>
              <li className="nav-item mb-2"><p> bairro</p></li>
              <li className="nav-item mb-2"><p> cep</p></li><li className="nav-item mb-2"><p></p></li>

              <li className="nav-item mb-2"><p> Email</p></li>
              <li className="nav-item mb-2"><p> Telefone</p></li>

            </ul>
            <div className="d-flex justify-content-center py-4 my-4 border-top"  id="contact">
          <h4 className="text-start">Entre em contato conosco </h4> 

          
          
        </div>
        <Formulario/>  
          </div>      

          
        </div>

        </div>

        </Container>
        </div>
    )
}