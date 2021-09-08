

export default function Formulario() {
    return (

        <form class="row g-2">
            <div class="col-6">
                <label for="inputNome" class="form-label">Nome</label>
                <input type="text" class="form-control" id="inputNome" />
            </div>
            <div class="col">
                <label for="inputTelefone" class="form-label">Telefone</label>
                <input type="tel" class="form-control" id="inputTelefone" />
            </div>
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4" />
            </div>

            <div class="col-12">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
        </form>
    )
}