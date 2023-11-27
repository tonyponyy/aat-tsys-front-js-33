let accion_p = (e) => {
    alert("Se presionó un parrafo del documento");
    let tabla2 = e.currentTarget.closest("table").id == "tabla_2";
    if (tabla2) {
      alert("Se presionó un parrafo contenido en la segunda tabla");
    }
};
let parrafos = document.querySelectorAll("p");
parrafos.forEach((parrafo) => {
  parrafo.addEventListener("click", accion_p);
});
