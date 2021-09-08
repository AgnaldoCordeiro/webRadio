import { Container } from "reactstrap";



export default function About(){
    return(

        <Container className="container">
        <div className={` from-gray-400 m-3 justify-content
        py-10 px-10
        m-10`}>
            <h1 className={`text-center font-bold text-5xl`}>About</h1>
            <p>A RÁDIO MCR WEB tem como objetivo resgatar as músicas que marcaram várias gerações, pois as outras emissoras não lembram de tocar.</p> 
            <p>Aqui estão as verdadeiras músicas, onde se faziam músicas com qualidade, 
                e muitos intérpretes destas músicas estão sendo esquecidos, 
                mas a RÁDIO MCR WEB faz sua parte que é a levar ao ouvinte as
                 verdadeiras músicas da MPB e internacionais para que não sejam esquecidas.
                 </p>
        </div>

        </Container>

    )
}