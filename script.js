/* Sélection des éléments HTML */

function openCloseNav() {
  let ul = document.querySelector("#list-menu");
  if (ul.style.display === "none") {
    ul.style.display = "flex";
  } else {
    ul.style.display = "none";
  }
}
