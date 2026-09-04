document.addEventListener("DOMContentLoaded", () => {
  const audioVoltar = document.getElementById("meuAudio");

  // Seleciona todos os links que apontam para index.html
  const linksInicio = document.querySelectorAll('a[href="../pages/index.html"], #btnVoltar');

  linksInicio.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // impede o redirecionamento imediato
      audioVoltar.play();     // toca o áudio

      // redireciona após 2 segundos
      setTimeout(() => {
        window.location.href = "../pages/index.html";
      }, 2000);
    });
  });
});