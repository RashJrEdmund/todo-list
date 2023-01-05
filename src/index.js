import './styles/styles.css';
import updateTask from './scripts/data';
import './images/tick.svg';

// import {updateTask} from './scripts/data'

const form = document.querySelector('.form');
const inputField = document.querySelector('.input');

const displayDiv = document.querySelector('.tasks');

/* const addBtn = document.querySelector('.add-btn');
const tickBtn = document.querySelector('.tick-btn'); */
// const delBtn = document.querySelectorAll('.del-btn');

/* const updateTasks = (task) => {
  let template = '';
  template += updateTask(task);
  return template;
}; */

/* const addTasks = (task) => {

}; */

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log(e.target);
  if (inputField.value === '' || inputField.value === ' ') {
    inputField.style = 'border: 2px solid red;';
  } else {
    inputField.style = 'border: unset;';
    displayDiv.appendChild(updateTask(e.target.todoInput.value));
    e.target.todoInput.value = '';

    const todosDivs = document.querySelectorAll('.todos'); // dragging and droping

    todosDivs.forEach((draggable) => {
      draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
      });

      draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
      });
    });
  }
  const delBtn = document.querySelectorAll('.del-btn');
  delBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log('Lord');
    });
  });
});

/* const todosDivs = document.querySelectorAll('.todos');

todosDivs.forEach((draggable) => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
}); */

displayDiv.addEventListener('dragover', (e) => {
  e.preventDefault();
  // const afterElement = getDragPosition(displayDiv, e.clientY);
  const draggable = document.querySelector('.dragging'); // since only only one element will
  //  have this dragging class, see line 76
  displayDiv.appendChild(draggable);
});

/*  const getDragPosition = (container, y) => {
  draggableElements = [...container.querySelectorAll('draggable:not(dragging)')];

  draggableElements.reduce((closest, child) => {

  });
}; */
