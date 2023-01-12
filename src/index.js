import './styles/styles.css';
import data from './scripts/data';
import './images/tick.svg';

const form = document.querySelector('.form');
const inputField = document.querySelector('.input');
const resetBtn = document.querySelector('.reset-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputField.value === '' || inputField.value === ' ') {
    inputField.style = 'border: 2px solid red;';
  } else {
    inputField.style = 'border: unset;';
    data.displayDiv.appendChild(data.updateTask(e.target.todoInput.value));
    e.target.todoInput.value = '';
  }

  data.addEventHearers();
});

resetBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelectorAll('.todos')
    .forEach((todo) => {
      setTimeout(() => {
        todo.remove();
      }, 400);
    });

  document.querySelector('input')
    .value = '';
});
