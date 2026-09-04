//1. Seletores de elementos
//Use querySelector / querySelectorAll (ou getElementById, se preferir) para capturar pelo menos 3 elementos
//diferentes do seu site que serão manipulados pelo JS.

const titulo = document.querySelector("header h1");

//querySelector 
titulo.addEventListener("click", function() {
       titulo.textContent = "Bem-vinda à Bella Femme! 💗";
});

//querySelectorAll
const linkContato = document.querySelector('a[href="../pages/contato.html"]');

const modal = document.querySelector("#modal-confirmacao");
const btnConfirmar = document.querySelector("#btn-confirmar");
const btnCancelar = document.querySelector("#btn-cancelar");

linkContato.addEventListener("click", function(event) {

    // Impede o link de abrir imediatamente
    event.preventDefault();

    // Mostra a janela personalizada
    modal.style.display = "flex";
});

btnConfirmar.addEventListener("click", function() {

    // Vai para a página de contato
    window.location.href = "../pages/contato.html";

});

btnCancelar.addEventListener("click", function() {

    // Fecha a janela
    modal.style.display = "none";

});

// CONTADOR DO CARRINHO

    // Seleciona o carrinho
    const carrinho = document.getElementById("carrinho");
    console.log(carrinho);
    // Seleciona o contador
    const contadorCarrinho = document.getElementById("contador-carrinho");
    console.log(contadorCarrinho);
    // Começa em zero
    let quantidadeProdutos = 0;

        // Quando clicar no carrinho
    carrinho.addEventListener("click", function (event) {

        // Impede o link de mudar de página
        event.preventDefault();

        // Aumenta 1
        quantidadeProdutos++;

        // Mostra a quantidade
        contadorCarrinho.textContent = quantidadeProdutos;

    });




