import React, {useReducer} from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import {todoReducer,initialState} from './reducers/reducer'
function App() {
  const [state, dispatch] = useReducer(todoReducer,initialState);
  return (
    <div>
      <TodoList  dispatch={dispatch} state={state} id ={state.id}/>
      <TodoForm dispatch={dispatch} state={state}/>
    </div>
  );
}

export default App;
