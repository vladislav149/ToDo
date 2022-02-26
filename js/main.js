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

export function addTask(id, textTask, priority, idInput) {
  list[id] = {
    name: textTask,
    status: DEFAULT_STATUS,
    priority: priority,
    id: idInput
  };
}

export function findEmptyIdInput() {
  let idInput = list.findIndex(item => item === undefined);
  let isValiIdInput = Boolean(idInput + 1);
  if (isValiIdInput) {
    return idInput;
  } else {
    return idInput = list.length;
  }
}

export function changeStatus(idTask) {
  let whichId = list.findIndex(item => item.id === idTask);
  if (list[whichId].status === STATUS.TO_DO) {
    list[whichId].status = STATUS.DONE
  } else {
    list[whichId].status = STATUS.TO_DO
  }
}

export function changePriority(checkPriority) {
  if (checkPriority) {
    return PRIORITY.HIGH;
  } else {
    return PRIORITY.LOW;
  }
}

export function deleteTaskInList(input) {
  let idInput = input.id;
  let idInputIndex = list.findIndex(item => {
    if (!item) {
      console.log('error');
    } else if (item.id === idInput) {
      return item.id
    }
  });
  delete list[idInputIndex];
}