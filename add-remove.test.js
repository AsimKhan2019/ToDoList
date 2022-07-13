/**
 * @jest-environment jsdom
 */

import TodoList from './src/modules/addTodo.js';
import LocalStorage from './mocks/LocalStorage.js';

document.body.innerHtml = `<main>
<div id="list-container">
        <div class="list-head">
            <p class="todo">Today's To Do List</p>

           <a class="reload-btn reload-icon"> <i id="icon " class="fa-solid fa-rotate fa-lg font-awesome-icon"></i></a>
        </div>
       <div class ="input-container">
         <input type="text" class="input" name="addtext" placeholder="Add to your list..." />
        <i id="add-icon" class="fa fa-plus-square fa-lg font-awesome-icon"></i>
        </div>
        <div id="list-body"></div>
        <div class="button" id="clear">
            <button>Clear all completed</button>
        </div>
    </div>`;

global.localStorage = new LocalStorage();
const todolist = new TodoList();

// test adding a new task to localStorage using describe
describe('Adding Tasks', () => {
  test('add a new task', () => {
    todolist.addTask('test');
    expect(todolist.listArray.length).toBe(1);
  });
});



// test removing a task using description
describe('Remove a task', () => {
  test('remove a task', () => {
    todolist.removeTask(1);
    expect(todolist.listArray.length).toBe(0);
  });
});

describe('Clear All Completed Tasks', () => {
  const titleOne = 'Task two';
  const titleTwo = 'Task three';
  const titleFour = 'Task Four';
  test('Clear All Completed Tasks', () => {
    todolist.addTask(titleOne);
    todolist.addTask(titleTwo);
    todolist.addTask(titleFour);

    const { length } = todolist.listArray;

    expect(length).toBe(3);
  });

  test('Mark Some Tasks as completed and remove them', () => {
    todolist.addTask(titleOne);
    todolist.addTask(titleTwo);
    todolist.addTask(titleFour);

    const { length } = todolist.listArray;

    expect(length).toBe(6);
  },
  () => {
    // mark task as Completed
    todolist.listArray[0].completed = true;
    todolist.listArray[1].completed = true;
    // remove completed tasks
    todolist.clearCompleted();
    const { length } = todolist.listArray;
    expect(length).toBe(4);
  });
});
