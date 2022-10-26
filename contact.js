/* Fonction pour l'envoie du Json Formulaire */
const myName = document.querySelector("#pseudo");
const email = document.querySelector("#email");
const choice = document.querySelector("#choice");
const commentBox = document.querySelector("#comment-box");
const sendButon = document.querySelector("#send-buton");

sendButon.addEventListener("click", sendComment);

function sendComment() {
  console.log(myName.value);
  console.log(email.value);
  console.log(commentBox.value);
  if (choice.value === "question" && 42 === parseInt(commentBox.value))
    alert(
      `C'est la réponse à La grande question sur la vie, l'univers et le reste`
    );
  if (myName.value == "" || email.value == "" || commentBox.value == "") {
    alert(`Veuillez remplir tous les champs`);
    return;
  }
  let requete = JSON.stringify({
    pseudo: myName.value,
    email: email.value,
    checkbox: choice.value,
    commentBox: commentBox.value,
  });
  console.log(requete);
  alert(
    `Votre message sera traité dans les plus brefs délais / le Json est ${requete}`
  );
}
