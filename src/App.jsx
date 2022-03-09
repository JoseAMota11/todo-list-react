import React, {useState, useEffect} from 'react';
import './App.css';
import {TodoCounter} from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {TodoItem} from './components/TodoItem';
import {CreateTodoButton} from './components/CreateTodoButton';
import { Modal } from './components/Modal';
import {TodoForm} from './components/TodoForm';

export function useLocalStorage(itemName, initialValue){

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else{
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 1500)
  }, []);
  
  
  

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }

  return {item, saveItem, loading, error};

}

function App() {

  const [openModal, setOpenModal] = useState(false);

  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS", [])

  const [search, setSearch] = useState("");

  const todoCompleted = todos.filter(todo => !!todo.completed).length;
  const todoLength = todos.length;
  
  let searchedTodos = [];

  if(!search.length >= 1){
    searchedTodos = todos;
  } else{
    searchedTodos = todos.filter(todo => {
      const tedoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      return tedoText.includes(searchText);
    })
  }

  const addTodo = (text) => {
    const newTodo = [...todos];
    newTodo.push({
      completed: false,
      text
    })
    saveTodos(newTodo);
  }
  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodo = [...todos];
    newTodo[todoIndex].completed = !newTodo[todoIndex].completed;
    saveTodos(newTodo);
  }
  
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodo = [...todos];
    newTodo.splice(todoIndex, 1);
    saveTodos(newTodo);
  }

  return (
    <React.Fragment>
      <TodoCounter
      todoLength={todoLength} 
      todoCompleted={todoCompleted}
      />
      <TodoSearch 
        search={search}
        setSearch={setSearch}
        />
      <TodoList>
        {error && <p className='error'>We've got an error.</p>}
        {loading && <p className='loading'>Your TODOs are loading.</p>}
        {(!loading && !searchedTodos) && <p className='loading'>Make your first TODO.</p>}

        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.id} 
          text={todo.text} 
          completed={todo.completed} 
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton 
        openModal={setOpenModal}
      />
      {openModal && (
      <Modal>
      <TodoForm 
        addTodo={addTodo}
        openModal={setOpenModal}
      />
      {/* <CreateTodoButton 
        openModal={setOpenModal}
      /> */}
      </Modal>
    )}
    </React.Fragment> 
    );
}

export default App;
