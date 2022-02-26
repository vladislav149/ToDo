import {
  addTask,
  findEmptyIdInput,
  changeStatus,
  deleteTaskInList,
  changePriority
} from './main.js';


const buttonAddTask = document.querySelectorAll('.todo__add-task');

buttonAddTask.forEach(function (item) {
  item.addEventListener("click", addNewTask)
});

function addNewTask() {
  let parentButton = this.parentElement;
  let listTask = parentButton.nextElementSibling;
  let input = parentButton.firstElementChild;
  let fredomId = findEmptyIdInput();
  let textTask = input.value.trim();
  let checkClass = parentButton.classList.contains('high-priority');
  let priority = changePriority(checkClass);

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

function changeStatusTask() {
  let parentTextTask = this.parentElement;
  let labelFor = this.htmlFor;
  changeStatus(labelFor);
  parentTextTask.classList.toggle('list-tasks__check--active');
}

function deleteTask() {
  let liDeleteTask = this.parentElement;
  let input = liDeleteTask.querySelector('input');
  deleteTaskInList(input);
  liDeleteTask.remove();
}