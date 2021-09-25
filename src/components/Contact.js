import { Container } from "reactstrap";
import Formulario from '../components/Formulario'


export default function Contact(){
    return(
          <Container className="containe">
        <div className="container-fluid bg-gray-50 text-black py-20" id="contact">

       
        <div className={`justify-content-center
        py-5`}>
            <div className="row">
          <div className="container-midia">
            <h5>Radio Web MCR Web</h5>
            <p className="text-center"> Siga Nossas Redes Sociais</p>
            <ul className="contato-midia">
              <li className="midias-sociais"><a href="https://www.facebook.com/radiomcrweb"><img src="./facebook_icon-icons.com_59205.svg"/></a><p></p></li>
              <li className="midias-sociais"><a href="https://radiomcrweb.blogspot.com/"><img src="./iconfinder-blog-4661578_122455.svg"/></a> <p></p></li>              

            </ul>
            <div className="d-flex justify-content-center py-4 my-4 border-top">
          <h4 className="text-start">Entre em contato conosco </h4> 

          
          
        </div>
        <Formulario/>  
          </div>  
         
        </div>

        </div>

        </div>
        </Container>
    )
}


