const displayDiv = document.querySelector('.tasks');

let uniCounter = 0;

const updateTask = (task) => {
  const virtualDiv = document.createElement('div');
  virtualDiv.addEventListener('click', (/* event */) => {
    // console.log(form.todoInput);
    // if (event.target.matches('')){}
  });
  uniCounter += 1;
  virtualDiv.dataset.index = uniCounter;
  virtualDiv.classList.add('todos');
  virtualDiv.draggable = true;
  virtualDiv.innerHTML = `
  <div class="topic" data-counter="${virtualDiv.dataset.index}">${task}</div>
  <div class="buttons" data-value="${virtualDiv.dataset.index}">
    <button class="del-btn" name="cross" data-value="${virtualDiv.dataset.index}">&cross;</button>
    <button class="tick-btn" name="tick" data-value="${virtualDiv.dataset.index}">&check;</button>
    <!-- <img src="./images/cross.svg" alt="close image button" class="del-btn">
    <img src="./images/tick.svg" alt="tick image button" class="tick-btn"> -->
  </div>`;
  return virtualDiv;
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

const addEventHearers = () => {
  const todosDivs = document.querySelectorAll('.todos'); // dragging and droping

  todosDivs.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  });

  // FOR THE DELETE BUTTON

  const delBtn = document.querySelectorAll('.del-btn');
  const topicDivs = document.querySelectorAll('.topic');

  delBtn.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', () => {
      todosDivs.forEach((thatdiv) => {
        if (thatdiv.dataset.index === deleteBtn.dataset.value) {
          topicDivs.forEach((topic) => {
            if (topic.dataset.counter === deleteBtn.dataset.value) {
              topic.classList.toggle('deleted');
            }
            setTimeout(() => {
              thatdiv.remove();
            }, 500);
          });
        }
      });
    });
  });

  // ENDING DELETE BUTTON STARTING FOR TICK BUTTON

  const doneBtn = document.querySelectorAll('.tick-btn');

  doneBtn.forEach((tick) => {
    tick.addEventListener('click', () => {
      topicDivs.forEach((topic) => {
        if (topic.dataset.counter === tick.dataset.value) {
          topic.classList.toggle('done');
          console.log(`
            color works now and:
            topic counter = ${topic.dataset.counter} and tick value = ${tick.dataset.value}
            `);
          // topic.remove();
        } else {
          console.log(`topic counter = ${topic.dataset.counter} and tick value = ${tick.dataset.value}`);
        }
      });
    });
  });

  // NOW ENDING BOTH DELETE AND TICK BUTTON

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
};

export default {
  updateTask,
  addEventHearers,
  displayDiv,
};
