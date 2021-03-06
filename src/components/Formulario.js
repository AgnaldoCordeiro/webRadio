import Image from 'next/image'

export default function Formulario() {
    return (

        <form className="row g-4">
            <div className="col-6">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" className="form-control" id="name" />
            </div>
            <div className="col">
                <label htmlFor="inputTelefone" className="form-label">Telefone</label>
                <input type="tel" className="form-control" id="inputTelefone" />
            </div>
            <div className="col-md-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="mensagem" className="form-label">Mensagem</label>
                <textarea className="form-control" id="mensagem" rows="3"></textarea>
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
        </form>
    )
}





//https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png