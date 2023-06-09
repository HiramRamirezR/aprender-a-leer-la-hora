const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourPlusBtn = document.querySelector('#hour-plus');
const hourMinusBtn = document.querySelector('#hour-minus');
const minutePlusBtn = document.querySelector('#minute-plus');
const minuteMinusBtn = document.querySelector('#minute-minus');
const checkTimeBtn = document.querySelector('#check-time');
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const contadorDisplay = document.querySelector('#contador');
const contadorTexto = document.querySelector('.contador-texto');
const h1 = document.querySelector('h1');
const clockFace = document.querySelector('.clock-face');
const numbers = document.querySelectorAll('.number');
const digital = document.querySelector('.digital');
const circle = document.querySelector('.circle');

const colores = ['#b4ffb0', '#f3ffb0', '#b0fbff', '#b0b7ff', '#f2b0ff', '#ffb0b0']

let contador = 0;

let currentHour = 0;
let currentMinute = 0;

let hourInitial = 0;
let minuteInitial = 0;

function digitalTime() {
  let randomHour = Math.floor(Math.random() * 12) + 1;
  let randomMinute = Math.floor(Math.random() * 60);

  console.log(randomMinute.length);

  hour.textContent = randomHour;
  minute.textContent = randomMinute;

  randomMinute === 0 ? minute.textContent = '00' : randomMinute.length < 2 ? minute.textContent = `0${randomMinute}` : minute.textContent = randomMinute;
  randomMinute.toString().length < 2 ? minute.textContent = `0${randomMinute}` : minute.textContent = randomMinute
}

digitalTime();

hourPlusBtn.addEventListener('click', () => {
  currentHour = (currentHour + 1) % 12;
  // console.log(currentHour);
  if (currentHour === 0) currentHour = 12;
  hourInitial += 30;
  hourHand.style.transform = `rotate(${hourInitial}deg)`;
});

hourMinusBtn.addEventListener('click', () => {
  currentHour = (currentHour - 1 + 12) % 12;
  // console.log(currentHour);
  if (currentHour === 0) currentHour = 12;
  hourInitial -= 30;
  hourHand.style.transform = `rotate(${hourInitial}deg)`;
});

minutePlusBtn.addEventListener('click', () => {
  currentMinute = (currentMinute + 1) % 60;
  // console.log(currentMinute);
  minuteInitial += 6;
  minuteHand.style.transform = `rotate(${minuteInitial}deg)`;
});

minuteMinusBtn.addEventListener('click', () => {
  currentMinute = (currentMinute - 1 + 60) % 60;
  // console.log(currentMinute);
  minuteInitial -= 6;
  minuteHand.style.transform = `rotate(${minuteInitial}deg)`;
});

checkTimeBtn.addEventListener('click', () => {

  let hourAnswer = parseInt(hour.textContent);
  let minuteAnswer = parseInt(minute.textContent);

  if (hourAnswer === currentHour && minuteAnswer === currentMinute) {
    console.log('¡Correcto!');
    contador ++
    contadorDisplay.innerHTML = contador;
  } else {
    console.log('Incorrecto. Por favor, intenta de nuevo.');
    contador--
    contador < 0 ? contador = 0 : contador
    contadorDisplay.innerHTML = contador;
  }

  let randomColor = Math.floor(Math.random() * colores.length);
  h1.style.color = colores[randomColor];
  clockFace.style.border = `1px solid ${colores[randomColor]}`;
  numbers.forEach(number => number.style.color = colores[randomColor]);
  contadorDisplay.style.color = colores[randomColor];
  contadorTexto.style.color = colores[randomColor];
  digital.style.border = `1px solid ${colores[randomColor]}`;
  circle.style.backgroundColor = colores[randomColor];

  digitalTime();
});
