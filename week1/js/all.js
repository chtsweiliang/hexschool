var newTodo = document.querySelector('#newTodo');
var addTodo = document.querySelector('#addTodo');
var todoList = document.querySelector('#todoList');
var taskCount = document.querySelector('#taskCount');
var clearTask = document.querySelector('#clearTask');

addTodo.addEventListener('click', updateData);

var todoData = [];
function updateData() {
  if (newTodo.value.trim() !== '') {
    todoData.push({
      id: Math.floor(Date.now()),
      title: newTodo.value,
      completed: false,
    })
  }
  render();
}
function removeData(e) {
  var action = e.target.dataset.action;
  var id = e.target.dataset.id;
  var newIndex = 0;

  switch (action) {
    case 'remove':
      // todoData.forEach(function (item, key) {
      //   if (id == item.id) {
      //     newIndex = key;
      //   }
      // })
      // todoData.splice(newIndex, 1);
      handleRemove(id, newIndex);
      break;
    case 'complete':
      // todoData.forEach(function (item) {
      //   if (id == item.id) {
      //     if (item.completed) {
      //       item.completed = false;
      //     } else {
      //       item.completed = true;
      //     }
      //   }
      // })
      handleComplete(id);
      break;
    default:
      e.preventDefault();
      todoData = [];
      todoListinnerHTML = '';
      taskCount.textContent = todoData.length;
      break;
  }
  render();
  /*
  if (action == 'remove') {
    todoData.forEach(function (item, key) {
      if (id == item.id) {
        newIndex = key;
      }
    })
    todoData.splice(newIndex, 1);
  } else if (action == 'complete') {
    todoData.forEach(function (item) {
      if (id == item.id) {
        if (item.completed) {
          item.completed = false;
        } else {
          item.completed = true;
        }
      }
    })
  } else {
    e.preventDefault();
    todoData = [];
    todoListinnerHTML = '';
    taskCount.textContent = todoData.length;
  }
  render();
  */
}
function handleRemove(id, newIndex) {
  todoData.forEach(function (item, key) {
    if (id == item.id) {
      newIndex = key;
    }
  })
  todoData.splice(newIndex, 1);
}

function handleComplete(id) {
  todoData.forEach(function (item) {
    if (id == item.id) {
      if (item.completed) {
        item.completed = false;
      } else {
        item.completed = true;
      }
    }
  })
}
function render() {
  var str = '';
  todoData.forEach(function (item) {
    str += `<li class="list-group-item">
<div class="d-flex">
<div class="form-check">
<input type="checkbox" class="form-check-input" ${item.completed ? 'checked' : ''} data-action="complete" data-id="${item.id}">
<label class="form-check-label ${item.completed ? 'completed' : ''}" data-action="complete" data-id="${item.id}"> ${item.title}</label>
</div>
<button type="button" class="close ml-auto" aria-label="Close">
<span aria-hidden="true" data-action="remove" data-id="${item.id}">&times;</span>
</button>
</div>
</li>`;
  })
  todoList.innerHTML = str;
  taskCount.textContent = todoData.length;
  newTodo.value = '';

  clearTask.addEventListener('click', removeData);

  var removeBtns = document.querySelectorAll('[data-action]');
  removeBtns.forEach(function (removeBtn) {
    removeBtn.addEventListener('click', removeData);
  });
}


