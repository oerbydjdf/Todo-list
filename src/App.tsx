import React from 'react';
import './App.scss';
import AddsEntry from './components/addsENtry/AddsEntry';
import TodoList from './components/todoList/TodoList';
import Sorted from './components/sorted/Sorted';
import Store from './store/Storet';

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <h2>A simple  todo list app using MERN stack</h2>
      <Sorted getnumSordet={Store.getSortedNum}/>
      <AddsEntry sort={Store.setTodoList}/>
      <TodoList list={Store}/>
    </div>
  );
}

export default App;
