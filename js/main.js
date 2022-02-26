import {
  buttonAddTask,
  buttonDeleteTask,
  textTask
} from './view.js';

const STATUS = {
  DONE: "Done",
  TO_DO: "To do"
}

const PRIORITY = {
  HIGH: "high",
  LOW: "low"
}

const DEFAULT_STATUS = STATUS.TO_DO;

const list = [];

buttonAddTask.forEach(function (item) {
  item.addEventListener("click", addNewTask)
});

buttonDeleteTask.forEach(function (item) {
  item.addEventListener("click", deleteTask)
});

textTask.forEach(function (item) {
  item.addEventListener("click", changeStatusTask)
});

function addNewTask() {
  let parentButton = this.parentElement;
  let listTask = parentButton.nextElementSibling;
  let input = parentButton.firstElementChild;
  let fredomId = findEmptyIdInput();
  let textTask = input.value.trim();
  let priority = checkPriority(parentButton);

  if (textTask) {
    listTask.insertAdjacentHTML('beforeend',
      `<li class="list-tasks__item task">
        <input class="list-tasks__check" type="checkbox" id="checkbox-${fredomId}">
        <label class="list-tasks__text" for="checkbox-${fredomId}">${textTask}</label>
        <button class="list-tasks__delete btn" type="button"></button>
      </li>`
    );
    input.value = '';
    let id = `checkbox-${fredomId}`;
    addTask(fredomId, textTask, priority, id);
  } else {
    input.value = '';
    return
  }

  let liNewTask = listTask.lastChild.querySelector('.list-tasks__text');
  liNewTask.addEventListener("click", changeStatusTask);

  let buttonDelete = listTask.lastChild.querySelector('.list-tasks__delete');
  buttonDelete.addEventListener("click", deleteTask);
}

function findEmptyIdInput() {
  let idInput = list.findIndex(item => item === undefined)
  let isValiIdInput = (Boolean(idInput + 1)) ? true : false;
  if (isValiIdInput) {
    return idInput;
  } else {
    idInput = list.length;
  }
  return idInput;
}

function deleteTask() {
  let liDeleteTask = this.parentElement;
  let input = liDeleteTask.querySelector('input');
  let idInput = input.id;
  let idInputIndex = list.findIndex(item => {
    if (!item) {
      console.log('error');
    } else if (item.id === idInput) {
      return item.id
    }
  });
  liDeleteTask.remove();
  delete list[idInputIndex];
}

function changeStatusTask() {
  changeStatus(this);
  let parentTextTask = this.parentElement;
  parentTextTask.classList.toggle('list-tasks__check--active');
}

function addTask(id, textTask, priority, idInput) {
  list[id] = {
    name: textTask,
    status: DEFAULT_STATUS,
    priority: priority,
    id: idInput
  };
}

function checkPriority(parentButton) {
  if (parentButton.classList.contains('high-priority')) {
    return PRIORITY.HIGH;
  } else {
    return PRIORITY.LOW;
  }
}

function changeStatus(label) {
  let labelfor = label.htmlFor;
  let whichId = list.findIndex(item => item.id === labelfor);
  if (list[whichId].status === STATUS.TO_DO) {
    list[whichId].status = STATUS.DONE
  } else {
    list[whichId].status = STATUS.TO_DO
  }
}