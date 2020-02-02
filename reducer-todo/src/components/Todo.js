import React from 'react'

const Todo =(props) => {

    return (
        <li 
        style={props.completed ? {textDecoration: 'line-through'} :null}
        onClick={() => props.toggleFinished(props.id)}
        >
            {props.title}
        </li>
    )
}
export default Todo