import React, {useState} from 'react';

const TodoForm = (props) => {
    const [newTodoTask, setNewTodoTask] = useState("")

    const changeHandler =(event) =>{
        setNewTodoTask(event.target.value);
        
    };

    const handleAddNewTodo = event =>{
        event.preventDefault();
        props.dispatch({type : "ADD_ITEM", payload: newTodoTask});
    }

    const clearCompleted = event =>{
        event.preventDefault();
        props.dispatch({type : "REMOVE_FINISHED"})
        console.log(props.state)
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
        </div>
    )
}
export default TodoForm