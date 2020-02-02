export const initialState = [
    {
        item:"Add A Task",
        completed:false,
        id: Date.now()
    }
]

export const todoReducer = (state,action) => {
    switch(action.type) {
        case 'ADD_ITEM' :
            return [
                ...state,{
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                } 
            ]
        case 'TOGGLE_FINISHED':
            return state.map(todo=> 
                todo.id === action.id ? {...todo, completed: !todo.completed} :todo
                )
        case 'REMOVE_ITEMS' :
            return state.filter(todo => !todo.completed)        
        default:
            return state;    
    }
}    

