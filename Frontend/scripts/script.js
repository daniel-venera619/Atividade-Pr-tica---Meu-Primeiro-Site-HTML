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