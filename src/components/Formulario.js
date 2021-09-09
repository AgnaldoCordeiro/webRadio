import Image from 'next/image'

export default function Formulario() {
    return (

        <form className="row g-4">
            <div className="col-6">
                <label htmlFor="inputNome" className="form-label">Nome</label>
                <input type="text" className="form-control" id="inputNome" />
            </div>
            <div className="col">
                <label htmlFor="inputTelefone" className="form-label">Telefone</label>
                <input type="tel" className="form-control" id="inputTelefone" />
            </div>
            <div className="col-md-12">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div class="mb-3">
                <label htmlFor="mensagemFormControlTextarea1" className="form-label">Mensagem</label>
                <textarea className="form-control" id="mensagemFormControlTextarea1" rows="3"></textarea>
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </form>
    )
}

//https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png