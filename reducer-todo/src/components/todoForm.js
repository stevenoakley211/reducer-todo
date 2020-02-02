import React, {useState, useReducer} from 'react';
import {todoReducer, initialState} from '../reducers/reducer'
import DisplayList from './displayTodoList';

 const TodoForm = () =>{
    const [state, dispatch] = useReducer(todoReducer,initialState);
    const [newTodoTask, setNewTodoTask] = useState("")
    
    const changeHandler =(event) =>{
        setNewTodoTask(event.target.value);
        
    };
    const handleAddNewTodo = event =>{
        event.preventDefault();
        
        dispatch({type: "ADD_ITEM", payload: newTodoTask});
    }
    const clearCompleted = event =>{
        event.preventDefault();
        dispatch({type: "REMOVE_ITEMS"})
    }
    return (
        <div>
            <form>
                <input 
                    className="todo-input"
                    type="text"
                    name="newTodoTask"
                    value={newTodoTask}
                    onChange={changeHandler}
                />
                <button onClick={handleAddNewTodo}>ADD</button>
                <button onClick={clearCompleted}>CLEAR</button>
            </form>
            <DisplayList id={state.id} state={state} dispatch={dispatch}/>
        </div>
    )
}
export default TodoForm