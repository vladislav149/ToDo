import {
  buttonAddTask,
  buttonDeleteTask,
  textTask
} from './view.js';

const idInputArr = ['checkbox-0', 'checkbox-1', 'checkbox-2', 'checkbox-3'];

buttonAddTask.forEach(function (item) {
  item.addEventListener("click", addNewTask)
});

test();

function test() {
  buttonDeleteTask.forEach(function (item) {
    item.addEventListener("click", deleteTask)
  });

  textTask.forEach(function (item) {
    item.addEventListener("click", changeStatusTask)
  });
}


function addNewTask() {
  let parentButton = this.parentElement;
  let listTask = parentButton.nextElementSibling;
  let input = parentButton.firstElementChild;
  let textTask = input.value;
  let fredomId = findEmptyIdInput();
  let isValidId = fredomId < idInputArr.length ? true : false;
  if (textTask) {
    listTask.insertAdjacentHTML('beforeend',
      `<li class="list-tasks__item task">
        <input class="list-tasks__check" type="checkbox" id="checkbox-${fredomId}">
        <label class="list-tasks__text" for="checkbox-${fredomId}">${textTask}</label>
        <button class="list-tasks__delete btn" type="button"></button>
      </li>`
    );
    input.value = '';
    if (isValidId) {
      idInputArr.splice(fredomId, 1, `checkbox-${fredomId}`);
    } else {
      idInputArr.push(`checkbox-${fredomId}`);
    }
  } else {
    return
  }
  test();
}

function findEmptyIdInput() {
  let idInput = idInputArr.findIndex(item => item === undefined)
  if ((Boolean(idInput + 1))) {
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