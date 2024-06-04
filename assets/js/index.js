// document = html (tipo de documento - DOCTYPE)
// querySelectorAll = busca geral
const elementosDuvidas = document.querySelectorAll(".duvidas");

elementosDuvidas.forEach(function (duvidas) {
  duvidas.addEventListener("click", function () {
    duvidas.classList.toggle("ativa");
  });
});
