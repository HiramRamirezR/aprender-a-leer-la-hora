const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourPlusBtn = document.querySelector('#hour-plus');
const hourMinusBtn = document.querySelector('#hour-minus');
const minutePlusBtn = document.querySelector('#minute-plus');
const minuteMinusBtn = document.querySelector('#minute-minus');
const checkTimeBtn = document.querySelector('#check-time');

function setClock() {
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hoursDegrees = (hours / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

let currentHour = 12;
let currentMinute = 0;

hourPlusBtn.addEventListener('click', () => {
  currentHour = (currentHour + 1) % 12;
  if (currentHour === 0) currentHour = 12;
  hourHand.style.transform = `rotate(${(currentHour / 12) * 360 + 90}deg)`;
});

hourMinusBtn.addEventListener('click', () => {
  currentHour = (currentHour - 1 + 12) % 12;
  if (currentHour === 0) currentHour = 12;
  hourHand.style.transform = `rotate(${(currentHour / 12) * 360 + 90}deg)`;
});

minutePlusBtn.addEventListener('click', () => {
  currentMinute = (currentMinute + 1) % 60;
  minuteHand.style.transform = `rotate(${(currentMinute / 60) * 360 + 90}deg)`;
});

minuteMinusBtn.addEventListener('click', () => {
  currentMinute = (currentMinute - 1 + 60) % 60;
  minuteHand.style.transform = `rotate(${(currentMinute / 60) * 360 + 90}deg)`;
});

checkTimeBtn.addEventListener('click', () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  if (hours === currentHour && minutes === currentMinute) {
    alert('¡Correcto!');
  } else {
    alert('Incorrecto. Por favor, intenta de nuevo.');
  }
});
