/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/**
 * @jest-environment jsdom
 */

import TodoList from './src/modules/addTodo.js';
import LocalStorage from './mocks/LocalStorage.js';

const todolist = new TodoList();

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

// test editing a task description in localStorage using describe

describe('Edit', () => {
  const title = {
    description: 'test',
    completed: false,
  };
  todolist.addTask(title);
  const index = 0;
  const textInsterted = 'Task';

  // edit title
  test('edit a task', () => {
    todolist.editTask(index, textInsterted);
    expect(todolist.listArray[index].description).toBe(textInsterted);
  });
});
