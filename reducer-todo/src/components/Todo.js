import React from 'react'

const Todo = (props) => {

    return (
        <li>
            {props.title}
            <input type='checkbox' onClick={() => props.toggleFinished(props.id)}/>
        </li>
    )
}
export default Todo