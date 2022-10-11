/* Sélection des éléments HTML */

function openCloseNav() {
  let ul = document.querySelector("#list-menu");
  if (ul.style.display != "none") {
    ul.style.display = "none";
  } else {
    ul.style.display = "flex";
  }
}

const divCacher = document.querySelector("#divCacher");
function full_screenPicture(picture) {
  if (window.innerWidth > 581) {
    /* créer la variable src contenant l'image du div avec l'id img-container */
    let src = picture.replace(/-responsive.jpg/, ".jpg");
    /* ajoute l'attribut src="" à la balise img dans le div avec l'id img-viewer */
    divCacher.querySelector("img").setAttribute("src", src);
    /* change le css correspondant à l'ID #img-viewer du display:none à display:block */
    divCacher.style.display = "block";
  }
}

function close_model() {
  /* change le css correspondant à l'ID #img-viewer du  display:block à display:none*/
  divCacher.style.display = "none";
}
