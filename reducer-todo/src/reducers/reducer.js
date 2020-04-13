export const initialState = [
    {
        item:"Add A Task",
        completed:false,
        id: Date.now()
    }
]
// The reducer takes in the state object that you want changed and an action call that tells the reducer what change you want made to the state.
export const todoReducer = (state,action) => {
    switch(action.type){
        // If action.type = ADD_ITEM
        case 'ADD_ITEM' :
            // Return the a copy of the state with the item added.
            return [...state,{
                item: action.payload,
                completed:false,
                id:Date.now()
            }
        ]
        // If the action.type = TOGGLE_FINISHED.
        case 'TOGGLE_FINISHED' :
            // return a copy of the state that has the item (that matches the action.id passed in) with its completed status changed.
            return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} :todo)
            //If the action.type = REMOVE_FINISHED  
        case 'REMOVE_FINISHED' :
            // Return a copy of the state that has had tasks that were completed filtered out
            return state.filter( todo => !todo.completed)
        default:
            return state;    
    }
}