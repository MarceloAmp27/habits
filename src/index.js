const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const btnDay = document.querySelector("header button");
let btnMain = document.getElementById("returnMain");

btnDay.addEventListener("click", add);
form.addEventListener("change", save);
btnMain.addEventListener("click", returnMain);

function add() {
  const today = new Date().toLocaleDateString("pt-BR").slice(0, -5);

  const dayExists = nlwSetup.dayExists(today);

  if (dayExists == true) {
    alert("Erro‼ Dia: " + today + ", já existente.");
    return;
  } else {
    alert("Registrado com Sucesso✅");
    nlwSetup.addDay(today);
  }
}

function save() {
  localStorage.setItem("PortMar@habits", JSON.stringify(nlwSetup.data));
}

function returnMain() {
  let local = "../../../index.html";
  if (btnMain == true) {
    alert("Você está sendo direcionado ao Menu");
    location.href = local;
  } else {
    return;
  }
}

const data = JSON.parse(localStorage.getItem("PortMar@habits")) || {};
nlwSetup.setData(data);
nlwSetup.load();
