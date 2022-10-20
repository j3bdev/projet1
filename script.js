/* --- Boucle pour le Menu Burger --- */
const menuBtn = document.querySelector("#burger");
const ul = document.querySelector("#list-menu");
let menuOpen = false;
function openCloseNav() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    ul.classList.add("open");
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    ul.classList.remove("open");
  }
}

/* Fonction pour affichage grand ecran */
const divCacher = document.querySelector("#hiden-div");
function fullScreenPicture(picture) {
  if (window.innerWidth > 581) {
    /* créer la variable src contenant l'image du div avec l'id img-container */
    let src = picture.replace(/-responsive.jpg/, ".jpg");
    /* ajoute l'attribut src="" à la balise img dans le div avec l'id img-viewer */
    divCacher.querySelector("img").setAttribute("src", src);
    /* change le css correspondant à l'ID #img-viewer du display:none à display:block */
    divCacher.style.display = "flex";
  }
}

function closeModel() {
  /* change le css correspondant à l'ID #img-viewer du  display:block à display:none*/
  divCacher.style.display = "none";
}

/* Fonction changement Couleur Theme */
const root = document.querySelector(":root");
const thmBtn = document.querySelector(".theme-buton");

changeColorBackground(true);
function changeColorBackground(boolean) {
  let bgColor = sessionStorage.getItem("bgColor");
  if (!boolean) {
    if (bgColor === `white`) bgColor = `grey`;
    else if (bgColor === `grey`) bgColor = `black`;
    else if (bgColor === `black`) bgColor = `white`;
  }

  switch (bgColor) {
    case `white`:
      root.style.setProperty("--background-color", `white`);
      root.style.setProperty("--font-color", `black`);
      if (!boolean) {
        sessionStorage.setItem("bgColor", "white");
      }
      thmBtn.innerHTML = "thème 🌓";

      break;
    case `grey`:
      root.style.setProperty("--background-color", `grey`);
      root.style.setProperty("--font-color", `white`);
      if (!boolean) {
        sessionStorage.setItem("bgColor", "grey");
      }
      thmBtn.innerHTML = "thème 🌑";

      break;
    case `black`:
      root.style.setProperty("--background-color", `black`);
      root.style.setProperty("--font-color", `white`);
      if (!boolean) {
        sessionStorage.setItem("bgColor", "black");
      }
      thmBtn.innerHTML = "thème ☀️";

      break;
    default:
  }
}
