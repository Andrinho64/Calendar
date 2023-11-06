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

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.

/* Exercício 1 – Crie um calendário dinamicamente */

function createCalendar() {
  const days = document.getElementById('days');
  const friday = [4, 11, 18, 25];

  decemberDaysList.forEach(day => {
    const liElement = document.createElement('li');
    liElement.classList.add('day');
    liElement.textContent = day;

    if (day === 24 || day === 25 || day === 31) {
      liElement.classList.add('holiday');
    }

    if (friday.includes(day)) {
      liElement.classList.add('friday');
    }

    days.appendChild(liElement);
  });
}

createCalendar();

/* Exercício 2 – Implemente uma função que muda a cor de fundo
dos dias que possuem a classe "holiday" */

const botaoFeriado = document.getElementById('btn-holiday');
const classHoliday = document.getElementsByClassName('holiday');

let botao = true;

botaoFeriado.addEventListener('click', () => {
  Array.from(classHoliday).forEach(element => {
    element.style.backgroundColor = botao ? 'white' : 'rgb(238,238,238)';
  });
  botao = !botao;
});

/* Exercício 3 – Implemente uma função que modifica o texto exibido
nos dias que são sextas-feiras */

const botaoSextaFeira = document.getElementById('btn-friday');
const classFriday = document.getElementsByClassName('friday');
const diasOriginal = [];

Array.from(classFriday).forEach(element => {
  diasOriginal.push(element.innerText);
});

let botaoSexta = true;

botaoSextaFeira.addEventListener('click', () => {
  if (botaoSexta === true) {
    Array.from(classFriday).forEach((element) => {
      element.innerText = 'Sextou!! =]';
    });
    botaoSexta = false;
  } else if (botaoSexta === false) {
    Array.from(classFriday).forEach((element, index) => {
      element.innerText = diasOriginal[index];
    });
    botaoSexta = true;
  }
});

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
