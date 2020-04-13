import React from 'react'
import {CheckBox,Li} from '../styles'
const Todo = (props) => {

    return (
        <Li>
            {props.title}
            <CheckBox type='checkbox' onClick={() => props.toggleFinished(props.id)}/>
        </Li>
    )
}
export default Todo