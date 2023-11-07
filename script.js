/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

const decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const friday = [4, 11, 18, 25];
const holiday = [24, 25, 31];

// Escreva seu código abaixo.

/* Exercício 1 – Crie um calendário dinamicamente */

function createCalendar() {
  const days = document.getElementById('days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const day = decemberDaysList[index];

    const liElement = document.createElement('li');
    liElement.classList.add('day');
    liElement.innerText = day;

    if (friday.includes(day)) {
      liElement.classList.add('friday');
    }

    if (holiday.includes(day)) {
      liElement.classList.add('holiday');
    }

    days.appendChild(liElement);
  }
}

createCalendar();

/* Exercício 2 – Implemente uma função que muda a cor de fundo
dos dias que possuem a classe "holiday" */

const botaoFeriado = document.getElementById('btn-holiday');
const classHoliday = document.getElementsByClassName('holiday');

let estadoBtnFeriado = false;

botaoFeriado.addEventListener('click', () => {
  for (let index = 0; index < classHoliday.length; index += 1) {
    if (estadoBtnFeriado === false) {
      classHoliday[index].style.backgroundColor = 'yellow';
    } else {
      classHoliday[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
  estadoBtnFeriado = !estadoBtnFeriado;
});

/* Exercício 3 – Implemente uma função que modifica o texto exibido
nos dias que são sextas-feiras */

const botaoSexta = document.getElementById('btn-friday');
const sextas = document.getElementsByClassName('friday');

let estadoBtnSexta = false;

function sextou() {
  for (let index = 0; index < sextas.length; index += 1) {
    if (estadoBtnSexta === false) {
      sextas[index].innerText = 'Sextou! =]';
    } else {
      sextas[index].innerText = friday[index];
    }
  }
  estadoBtnSexta = !estadoBtnSexta;
}

botaoSexta.addEventListener('click', sextou);

/* Exercício 4 – Implemente duas funções que criem um efeito de "zoom" */

const zoom = document.querySelectorAll('#days li');

const zoomIn = (event) => {
  event.target.style.fontSize = '30px';
};

const zoomOut = (event) => {
  event.target.style.fontSize = '20px';
};

zoom.forEach((li) => {
  li.addEventListener('mouseenter', zoomIn);
  li.addEventListener('mouseout', zoomOut);
});
