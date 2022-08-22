// Variables

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const rating = document.getElementById("rating");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const submit = document.getElementById("submit");
const span = document.querySelector("span");

//Listeners
rating.addEventListener("click", select);
submit.addEventListener("click", send);

// Functions
function select(e) {
  switch (e.target.textContent) {
    case "1":
      compruebaActivo();
      addRemoveClasses(btn1);
      span.textContent = btn1.textContent;
      break;

    case "2":
      compruebaActivo();
      addRemoveClasses(btn2);
      span.textContent = btn2.textContent;
      break;
    case "3":
      compruebaActivo();
      addRemoveClasses(btn3);
      span.textContent = btn3.textContent;
      break;
    case "4":
      compruebaActivo();
      addRemoveClasses(btn4);
      span.textContent = btn4.textContent;
      break;
    case "5":
      compruebaActivo();
      addRemoveClasses(btn5);
      span.textContent = btn5.textContent;
      break;
  }
}

function compruebaActivo() {
  const activo = document.querySelector(".activeButton");
  if (activo) {
    console.log(activo);
    activo.classList.remove("activeButton");
  }
}

function addRemoveClasses(elemento) {
  elemento.classList.add("activeButton");
  elemento.classList.remove("efect");
}

function send() {
  if (span.textContent) {
    card1.classList.add("hidden");
    card2.classList.remove("hidden");
  }
}
