import {
  buttonAddTask,
  buttonDeleteTask,
  textTask
} from './view.js';

const idInputArr = [];

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
  let textTask = input.value;

  if (textTask) {
    listTask.insertAdjacentHTML('beforeend',
      `<li class="list-tasks__item task">
        <input class="list-tasks__check" type="checkbox" id="checkbox-${fredomId}">
        <label class="list-tasks__text" for="checkbox-${fredomId}">${textTask}</label>
        <button class="list-tasks__delete btn" type="button"></button>
      </li>`
    );
    input.value = '';
    findEmptyIdArr(fredomId);

  } else {
    return
  }

  let liNewTask = listTask.lastChild.querySelector('.list-tasks__text');
  liNewTask.addEventListener("click", changeStatusTask);

  let buttonDelete = listTask.lastChild.querySelector('.list-tasks__delete');
  buttonDelete.addEventListener("click", deleteTask);
}

function findEmptyIdArr(fredomId) {
  let isValidId = fredomId < idInputArr.length ? true : false;

  if (isValidId) {
    idInputArr.splice(fredomId, 1, `checkbox-${fredomId}`);
  } else {
    idInputArr.push(`checkbox-${fredomId}`);
  }
}


function findEmptyIdInput() {
  let idInput = idInputArr.findIndex(item => item === undefined)
  let isValiIdInput = (Boolean(idInput + 1)) ? true : false;
  if (isValiIdInput) {
    return idInput;
  } else {
    idInput = idInputArr.length;
  }
  return idInput;
}

function deleteTask() {
  let liDeleteTask = this.parentElement;
  let input = liDeleteTask.querySelector('input');
  let idInput = input.id;
  let idInputIndex = idInputArr.findIndex(item => item === idInput);
  delete idInputArr[idInputIndex];
  liDeleteTask.remove();
}

function changeStatusTask() {
  let parentTextTask = this.parentElement;
  parentTextTask.classList.toggle('list-tasks__check--active');
}