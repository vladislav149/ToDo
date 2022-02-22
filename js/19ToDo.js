const STATUS = {
  TO_DO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",

}

const DEFAULT_STATUS = STATUS.TO_DO;

const list = {
  "create a new practice task": STATUS.IN_PROGRESS,
  "make a bed": STATUS.DONE,
  "write a post": STATUS.TO_DO,
}

function changeStatus(task, status) {
  list[task] = status;
}

function addTask(newTask) {
  list[newTask] = DEFAULT_STATUS;
}

function deleteTask(delTask) {
  delete list[delTask];
}

function showList() {
  const tasks = {
    [STATUS.TO_DO]: '',
    [STATUS.IN_PROGRESS]: '',
    [STATUS.DONE]: '',
  }

  for (let key in list) {
    tasks[list[key]] += `${key}, `;
  }

  //let to_do = "";
  //let in_progress = "";
  //let done = "";
  //for (let key in list) {
  //  switch (list[key]) {
  //    case STATUS.TO_DO:
  //      to_do += `  ${key} \n`;
  //      break;
  //
  //    case STATUS.IN_PROGRESS:
  //      in_progress += `  ${key} \n`;
  //      break;
  //
  //    case STATUS.DONE:
  //      done += `  ${key} \n`;
  //      break;
  //
  //    default:
  //      break;
  //  }
  //}
  //console.log(`${STATUS.TO_DO}:\n${to_do}${STATUS.IN_PROGRESS}:\n${in_progress}${STATUS.DONE}:\n${done}`)
  if (tasks[STATUS.IN_PROGRESS] === '') {
    tasks[STATUS.IN_PROGRESS] = '-'
  }
  if (tasks[STATUS.DONE] === '') {
    tasks[STATUS.DONE] = '-'
  }
  if (tasks[STATUS.TO_DO] === '') {
    tasks[STATUS.TO_DO] = '-'
  }
  console.log(tasks)
}

addTask("jump on bed");
addTask("have a walk");
addTask("watching TV");
changeStatus("jump on bed", "Done");
changeStatus("watching TV", "In Progress");
deleteTask("watching TV");
showList();