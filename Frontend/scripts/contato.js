// BOTÃO DE ENVIAR MENSAGEM

// Seleciona o formulário pelo ID
const formulario = document.getElementById("formulario");

// Seleciona a mensagem de sucesso pelo ID
const mensagemSucesso = document.getElementById("mensagem-sucesso");


// =========================================================
// EVENTO DE ENVIO DO FORMULÁRIO
// =========================================================

formulario.addEventListener("submit", function (event) {

    // Impede o comportamento padrão do formulário
    // e evita que a página seja atualizada
    event.preventDefault();

    // // Exibe a mensagem de sucesso
    // mensagemSucesso.textContent = "Mensagem enviada com sucesso!";
    mensagemSucesso.style.display = "block";
    
  
});

