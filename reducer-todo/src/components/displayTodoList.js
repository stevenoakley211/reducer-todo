import React from 'react'
import Todo from './Todo'
const DisplayList = (props) =>{
    const toggleFinished = (id) =>{
        props.dispatch({type :"TOGGLE_FINISHED", id:id})
    }
    return(
        <ul> 
            {props.state.map( task => (
                <Todo 
                    completed={task.completed}
                    id={task.id}
                    title={task.item}
                    toggleFinished={toggleFinished}
                />
            ))}

        </ul>
       
    )
}
export default DisplayList
