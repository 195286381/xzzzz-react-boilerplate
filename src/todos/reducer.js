import * as actionTypes from './actionTypes'

const initialState = []
let uniqueID = 1;
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TODO : {
            return [
                ...state,
                {
                    id: uniqueID++,
                    text:  action.payload.text,
                    complete: false,
                }
            ]
        }
        case actionTypes.REMOVE_TODO: {
            return state.filter(todoItem => todoItem.id !== action.payload.id)
        }
        case actionTypes.TOGGLE_TODO: {
            return state.map(todoItem => {
                if (todoItem.id === action.payload.id) {
                    return {...todoItem, complete: !todoItem.complete}
                } else {
                    return todoItem
                }
            })
        }
        default: return state
    }
}

export default reducer
