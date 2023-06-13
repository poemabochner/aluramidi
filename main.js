function tocaSomPom() {
  document.querySelector("#som_tecla_pom").play();
}

// function tocaSomClap() {
//     document.querySelector('#som_tecla_clap').play();
// }
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tecla_pom").onClick = tocaSomPom;
});
