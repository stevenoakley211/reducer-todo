import React from 'react';
import Todo from './Todo';

const TodoList =(props) => {
    const toggleFinished = (id) =>{
        props.dispatch({type :"TOGGLE_FINISHED", id:id})
    }
    return (
        <ul>
            {props.state.map( task => (
                <Todo 
                    id={task.id}
                    title={task.item}
                    toggleFinished={toggleFinished}
                />
            ))}
        </ul>
    )
}
export default TodoList