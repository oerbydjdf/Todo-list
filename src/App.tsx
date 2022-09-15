import React from 'react';
import './App.scss';
import AddsEntry from './components/addsENtry/AddsEntry';
import TodoList from './components/todoList/TodoList';
import Sorted from './components/sorted/Sorted';
import StoreTodoList from './store/StoreTodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <h2>A simple  todo list app using MERN stack</h2>
      <Sorted getnumSordet={StoreTodoList.getSortedNum}/>
      <AddsEntry sort={StoreTodoList.setTodoList}/>
      <TodoList list={StoreTodoList}/>
    </div>
  );
}

export default App;
