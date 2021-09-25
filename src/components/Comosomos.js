import Image from 'next/image' 

export default function Comosomos() {
    return (
        <div className="container-fluid bg-blue-400 text-white py-20" id="comosomos">
            <div className="container">
                <div className="row">
                    <div className="col s12 m12 l7
                    py-5
                    px-9                    
                    ">
                        <h4 className="mb-5">Como somos</h4>
                        <p><i>Radio MCR Web é Sucesso</i></p>
                        <p>Por 24 horas, sem intervalos a RAdio MCR Web é feita para você. Aqui, você terá a companhia das músicas de maiores sucessos do Mundo!.</p>
                        <p>Você vai curtir a Radio MCR Web, no embalo de grandes trilha sonoras que marcaram a saudade.</p>
                        <p>Curta nossa programação como Sucesso da Saudade Nacional, Raiz Sertanejo, Estação Forró, Só Love, RC Show e muito mais.</p>
                        <p>A Radio MCR Web é Sucesso feito para você!.</p>
                        <p>Todos os dias matando aquela Saudade!!</p>                   
                    </div>
                    <div className="col s12 m12 l5 center
                    py-4
                    px-6                                     
                    ">
                        <img className="img-thumbnail" src="./singer-84874_1920.jpg" alt="fundo2web"/>
                    </div>
                </div>
            </div>
        </div>

    )
}