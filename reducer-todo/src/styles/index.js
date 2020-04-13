import styled from 'styled-components'

export const Card = styled.div `
    margin:auto;
    margin-top:15px;
    padding:10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    width: 25%;
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const Button =styled.button `
    background: blue;
    border: 1px solid transparent;
    border-radius: 5px;
    color: white;
    margin-right: .3em;
    margin-left: .2em;

    padding: .25em .75em;
    transition: all .25s ease-in;
    &:hover {
        background: white;
        border: 1px solid blue;
        color: #333;
    }
    `
export const CheckBox = styled.input `
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    vertical-align:bottom;
`
export const Li = styled.li `
    font-size:25px;

`