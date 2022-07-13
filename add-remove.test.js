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
