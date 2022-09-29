/* Sélection des éléments HTML */

function openCloseNav() {
  let ul = document.querySelector("#list-menu");
  if (ul.style.display != "none") {
    ul.style.display = "none";
  } else {
    ul.style.display = "flex";
  }
}
