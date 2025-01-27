const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao")
let cartaoAtual = 0;

cartoes.forEach(cartao => {
    cartao.addEventListener("click", function () {
        const cartaVirada = cartao.querySelector(".carta-virada");
        cartao.classList.toggle("virar");
        cartaVirada.classList.toggle("mostrar-fundo-carta");

        const descricao = cartao.querySelector(".descricao");
        descricao.classList.toggle("esconder")
})
});

btnAvancar.addEventListener("click", function () {
    console.log(cartaoAtual);
    console.log(cartoes.length - 1)
    if (cartaoAtual === cartoes.length - 1) return;


    const cartaoSelecionado = document.querySelector(".selecionado")
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
});

const btnVoltar = document.getElementById("btn-voltar");

btnVoltar.addEventListener("click", function () {

    if (cartaoAtual === 0) return;

    const cartaoSelecionado = document.querySelector(".selecionado")
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
});
