// import { container } from 'webpack';

let uniCounter = 0;

const updateTask = (task) => {
  const virtualDiv = document.createElement('div');
  virtualDiv.addEventListener('click', (/* event */) => {
    console.log('jeez mourisee');
    console.log(virtualDiv);
    // console.log(form.todoInput);
    // if (event.target.matches('')){}
  });
  uniCounter += 1;
  virtualDiv.dataset.index = uniCounter;
  virtualDiv.classList.add('todos');
  virtualDiv.draggable = true;
  virtualDiv.innerHTML = `
  <div class="topic">${task}</div>
  <div class="buttons" data-value="${virtualDiv.dataset.index}">
    <button class="tick-btn" name="cross">&cross;</button>
    <button class="del-btn" name="tick">&check;</button>
    <!-- <img src="./images/tick.svg" alt="tick image button" class="tick-btn">
    <img src="./images/cross.svg" alt="close image button" class="del-btn"> -->
  </div>`;
  console.log('this the data-index', virtualDiv.dataset.index);
  return virtualDiv; // search on how to use appendChild();
};

// dragging and droping

/* const todosDivs = document.querySelectorAll('.todos');

todosDivs.forEach((draggable) => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

displayDiv.addEventListener('dragover', (e) => {
  e.preventDefault();
  // const afterElement = getDragPosition(displayDiv, e.clientY);
  const draggable = document.querySelector('.dragging'); // since only only one element will
  //  have this dragging class, see line 76
  displayDiv.appendChild(draggable);
});

const getDragPosition = (container, y) => {
  draggableElements = [...container.querySelectorAll('draggable:not(dragging)')];

  draggableElements.reduce((closest, child) => {

  });
}; */

export default updateTask;
