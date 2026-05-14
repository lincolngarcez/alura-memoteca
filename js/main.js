import ui from "./ui.js"
import api from "./api.js"

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPensamentos()

    const formmularioPensamento = document.getElementById("pensamento-form")
    formmularioPensamento.addEventListener("submit", manipularSubmissaoFormulario)

    const botaoCancelar = document.getElementById("botao-cancelar")
    botaoCancelar.addEventListener("click", ui.cancelarPensamento)
})

async function manipularSubmissaoFormulario(event) {
    event.preventDefault();
    const id = document.getElementById("pensamento-id").value
    const conteudo = document.getElementById("pensamento-conteudo").value
    const autoria = document.getElementById("pensamento-autoria").value

    try {
        await api.salvarPensamento({conteudo, autoria})
        ui.renderizarPensamentos()
    } catch(error) {
        alert("Erro ao salvar pensamento")
    }
}