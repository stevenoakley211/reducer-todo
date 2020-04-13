import React, {useReducer} from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import {todoReducer,initialState} from './reducers/reducer'
import {Card} from './styles'
function App() {
  const [state, dispatch] = useReducer(todoReducer,initialState);
  return (
    <Card>
      <h1>TASKS</h1>
      <TodoList  dispatch={dispatch} state={state} id ={state.id}/>
      <TodoForm dispatch={dispatch} state={state}/>
    </Card>
  );
}

export default App;
