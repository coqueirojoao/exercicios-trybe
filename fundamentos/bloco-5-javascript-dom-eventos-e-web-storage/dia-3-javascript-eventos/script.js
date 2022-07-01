function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();
// 1° Questão:
let ul = document.createElement("ul");
days.appendChild(ul);

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

for (let index of decemberDaysList) {
  let li = document.createElement("li");
  li.className = "day";
  li.innerText = index;
  if (index === 24 || index === 25 || index === 31) {
    li.classList.add("holiday");
  }
  if (index === 4 || index === 11 || index === 18 || index === 25) {
    li.classList.add("friday");
  }
  ul.appendChild(li);
}

// 2° Questão:
function criaBotaoFeriado(feriados) {
  let div = document.getElementsByClassName("buttons-container")[0];
  let botao = document.createElement("button");
  botao.id = "btn-holiday";
  botao.innerText = feriados;
  div.appendChild(botao);
}

criaBotaoFeriado("Feriados");

// 3° Questão:

let botao = document.getElementById("btn-holiday");
botao.addEventListener("click", backgroundChange);

function backgroundChange() {
  let holiday = document.getElementsByClassName("holiday");
  for (let index of holiday) {
    if (index.style.backgroundColor !== "white") {
      index.style.backgroundColor = "white";
    } else {
      index.style.backgroundColor = "rgb(238,238,238)";
    }
  }
}

// 4° Questão:

function createSexta(sexta) {
  let div = document.getElementsByClassName("buttons-container")[0];
  let botaoSexta = document.createElement("button");
  botaoSexta.id = "btn-friday";
  botaoSexta.innerText = sexta;
  div.appendChild(botaoSexta);
}

createSexta("Sexta-feira");

// 5° Questão:

let botaoSexta = document.getElementById("btn-friday");

botaoSexta.addEventListener("click", nameChange);

let friday = document.getElementsByClassName("friday");
let fridayArray = [];
for (let index of friday) {
  fridayArray.push(index.innerText);
}

function nameChange() {
  for (let indexText in friday) {
    if (friday[indexText].innerText !== "Sextou!!!!") {
      friday[indexText].innerText = "Sextou!!!!";
    } else {
      friday[indexText].innerText = fridayArray[indexText];
    }
  }
}

// 6° Questão:

let lista = document.getElementsByClassName("day");

for (let index = 0; index < lista.length; index += 1) {
  lista[index].addEventListener("mouseover", zoom);
  lista[index].addEventListener("mouseout", out);
}

function zoom(event) {
  event.target.style.fontSize = "26px";
}

function out(event) {
  event.target.style.fontSize = "20px";
}

// 7° Questão:

function tarefaCalendario(tarefa) {
  let span = document.createElement("span");
  span.innerText = tarefa;
  let div = document.getElementsByClassName("my-tasks")[0];
  div.appendChild(span);
}

tarefaCalendario("Projeto:");

// 8° Questão:

function subtitleColor(cor) {
  let div = document.createElement("div");
  div.className = "task";
  div.style.backgroundColor = cor;
  let divPai = document.getElementsByClassName("my-tasks")[0];
  divPai.appendChild(div);
}

subtitleColor("red");

// 9° Questão:

let divTask = document.getElementsByClassName("task")[0];

divTask.addEventListener("click", taskSelector);

function taskSelector() {
  if (divTask.classList[1] !== "selected") {
    divTask.classList.add("selected");
  } else {
    divTask.className = "task";
  }
}

// 10° Questão:

for (let index = 0; index < lista.length; index += 1) {
  lista[index].addEventListener("click", taskColor);
}

function taskColor(event) {
  let div = document.getElementsByClassName("selected")[0];
  if (event.target.style.color !== div.style.backgroundColor) {
    event.target.style.color = div.style.backgroundColor;
  } else {
    event.target.style.color = "rgb(119,119,119)";
  }
}

// Bonus:
let buttonAdd = document.getElementById("btn-add");
buttonAdd.addEventListener("click", addText);
let input = document.getElementById("task-input");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn-add").click();
  }
});

function addText() {
  let li = document.createElement("li");
  let listaComp = document.getElementsByClassName("task-list")[0];

  if (input.value === "") {
    alert("Escreva alguma coisa.");
  } else {
    li.innerText = input.value;
    listaComp.appendChild(li);
  }
}
