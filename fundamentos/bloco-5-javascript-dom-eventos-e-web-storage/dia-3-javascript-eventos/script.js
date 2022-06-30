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

let botao = document.getElementById('btn-holiday')
botao.addEventListener('click', backgroundChange)

function backgroundChange() {
    let holiday = document.getElementsByClassName('holiday')
    for (let index of holiday) {
        if (index.style.backgroundColor !== 'white') {
            index.style.backgroundColor = 'white'
        } else {
            index.style.backgroundColor = 'rgb(238,238,238)'
        }

}
}

// 4° Questão:

function createSexta(sexta) {
    let div = document.getElementsByClassName("buttons-container")[0];
    let botaoSexta = document.createElement('button')
    botaoSexta.id = 'btn-friday'
    botaoSexta.innerText = sexta
    div.appendChild(botaoSexta)
}

createSexta('Sexta-feira')