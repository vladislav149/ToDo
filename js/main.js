import {
  buttonAddTask
} from './view.js';

buttonAddTask.forEach(function (item) {
  item.addEventListener("click", addNewTask)
});

function addNewTask() {
  let ul = document.querySelector('.list-tasks');
  let input = document.querySelector('.todo__new-task');
  let textTask = input.value;
  ul.insertAdjacentHTML('beforeend',
    `<li class = "list-tasks__item task"><input class="list-tasks__check" type = "checkbox" id="checkbox-4"><label class="list-tasks__text" for="checkbox-4">${textTask}</label><button class="list-tasks__delete btn" type = "button"></button>`
  );
  input.value = '';
}