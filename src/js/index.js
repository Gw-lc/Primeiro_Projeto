const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll('.personagem')

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        unSelecionarBotao();
        botao.classList.add("selecionado");

        unSelecionarPersonagem();
        personagens[indice].classList.add("selecionado");
    })
})

function unSelecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

function unSelecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}