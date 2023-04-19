const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourPlusBtn = document.querySelector('#hour-plus');
const hourMinusBtn = document.querySelector('#hour-minus');
const minutePlusBtn = document.querySelector('#minute-plus');
const minuteMinusBtn = document.querySelector('#minute-minus');
const checkTimeBtn = document.querySelector('#check-time');
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');

let currentHour = 0;
let currentMinute = 0;

let hourInitial = 0;
let minuteInitial = 0;

function digitalTime() {
  let randomHour = Math.floor(Math.random() * 12) + 1;
  let randomMinute = Math.floor(Math.random() * 60);

  hour.textContent = randomHour;
  minute.textContent = randomMinute;
}

digitalTime();

hourPlusBtn.addEventListener('click', () => {
  currentHour = (currentHour + 1) % 12;
  console.log(currentHour);
  if (currentHour === 0) currentHour = 12;
  hourInitial += 30;
  hourHand.style.transform = `rotate(${hourInitial}deg)`;
});

hourMinusBtn.addEventListener('click', () => {
  currentHour = (currentHour - 1 + 12) % 12;
  console.log(currentHour);
  if (currentHour === 0) currentHour = 12;
  hourInitial -= 30;
  hourHand.style.transform = `rotate(${hourInitial}deg)`;
});

minutePlusBtn.addEventListener('click', () => {
  currentMinute = (currentMinute + 1) % 60;
  console.log(currentMinute);
  minuteInitial += 6;
  minuteHand.style.transform = `rotate(${minuteInitial}deg)`;
});

minuteMinusBtn.addEventListener('click', () => {
  currentMinute = (currentMinute - 1 + 60) % 60;
  console.log(currentMinute);
  minuteInitial -= 6;
  minuteHand.style.transform = `rotate(${minuteInitial}deg)`;
});

checkTimeBtn.addEventListener('click', () => {

  let hourAnswer = parseInt(hour.textContent);
  let minuteAnswer = parseInt(minute.textContent);

  console.log(`hourAnswer: ${hourAnswer}`);
  console.log(`minuteAnswer: ${minuteAnswer}`	);


  if (hourAnswer === currentHour && minuteAnswer === currentMinute) {
    console.log('¡Correcto!');
  } else {
    console.log('Incorrecto. Por favor, intenta de nuevo.');
  }
  console.log(`currentHour: ${currentHour}`);
  console.log(`currentMinute: ${currentMinute}`);
});
