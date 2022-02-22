const STATUS = {
  TO_DO: 'To do',
  IN_PROGRESS: 'In progress',
  DONE: 'Done',
}

const DEFAULT_STATUS = STATUS.TO_DO;

const PRIORITY = {
  LOW: 'low',
  HIGH: 'high',
}

const list = [{
    name: 'create a post',
    status: STATUS.IN_PROGRESS,
    priority: PRIORITY.HIGH
  },
  {
    name: 'jump on bed',
    status: STATUS.DONE,
    priority: PRIORITY.LOW
  },
  {
    name: 'sleep at lunch',
    status: STATUS.TO_DO,
    priority: PRIORITY.HIGH
  }
];

function addTask(name, priority) {
  list.push({
    name: name,
    status: DEFAULT_STATUS,
    priority: priority
  })
}

function deleteTask(name) {
  let findIndexTask = list.findIndex(task => task.name === name);
  list.splice(findIndexTask, 1);
}

function changeStatus(name, status) {
  let findIndexTask = list.findIndex(task => task.name === name);
  list[findIndexTask].status = status;
}

function changePriority(name, priority) {
  let findIndexTask = list.findIndex(task => task.name === name);
  list[findIndexTask].priority = priority;
}

function showList(filter) {
  let filterKey;
  if (filter === 'status') {
    filter = STATUS;
    filterKey = 'status';
  } else {
    filter = PRIORITY
    filterKey = 'priority'
  }

  for (let key in filter) {
    console.log(filter[key] + ':');
    let filtered = list.filter(task => task[filterKey] === filter[key])
    if (filtered.length === 0) {
      console.log('-');
    } else {
      console.log(filtered);
    }
  }
}

addTask('test', 'high');
addTask('buy a Tesla', 'high');
deleteTask('jump on bed');
changeStatus('sleep at lunch', 'Done');
changePriority('test', 'low');
showList('status');
console.log('\n');
showList('priority');