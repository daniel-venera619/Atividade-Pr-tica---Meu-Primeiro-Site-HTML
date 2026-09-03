//1. Seletores de elementos
//Use querySelector / querySelectorAll (ou getElementById, se preferir) para capturar pelo menos 3 elementos
//diferentes do seu site que serão manipulados pelo JS.

const titulo = document.querySelector("header h1");

//querySelector 
titulo.addEventListener("click", function() {
       titulo.textContent = "Bem-vinda à Bella Femme! 💗";
});

//querySelectorAll
const linkContato = document.querySelector('a[href="../Pages/contato.html"]');

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
    window.location.href = "../Pages/contato.html";

});

btnCancelar.addEventListener("click", function() {

    // Fecha a janela
    modal.style.display = "none";

});

//CONTADOR DO CARRINHO

// Seleciona o botão do carrinho
const carrinho = document.getElementById("carrinho");

// Seleciona o contador
const contadorCarrinho = document.getElementById("contador-carrinho");

// Começa a quantidade em zero
let quantidadeProdutos = 0;

// Quando clicar no carrinho
carrinho.addEventListener("click", function(event) {

    // Impede o comportamento padrão do link
    event.preventDefault();

    // Aumenta a quantidade em 1
    quantidadeProdutos++;

    // Atualiza o número mostrado na tela
    contadorCarrinho.textContent = quantidadeProdutos;

});



// BOTÃO DE ENVIAR MENSAGEM

// Seleciona o formulário pelo ID
const formulario = document.getElementById("formulario");

// Seleciona a mensagem de sucesso pelo ID
const mensagemSucesso = document.getElementById("mensagem-sucesso");

// Detecta quando o formulário for enviado
formulario.addEventListener("submit", function(event) {

    // Impede que a página seja recarregada
    event.preventDefault();

    // Mostra a mensagem de sucesso
    mensagemSucesso.textContent = "Mensagem enviada com sucesso!";

    // Exibe a mensagem na tela
    mensagemSucesso.style.display = "block";

    // Limpa os campos do formulário
    formulario.reset();

});

