import {createStore} from 'redux';
import App from '../App';

//Render function

//defining reducers 
type stateType = {show: string, todo: Array<{id: number, todo: string, completed: boolean}>}; 
const initialState: stateType = {show: 'all', todo: []};
const counterReducer = (state = initialState, action: {type: string, payload?:any}) => {
    switch(action.type){
        case 'add':
            return {...state, todo: [...state.todo, action.payload]};
        case 'remove':
            if(state.todo.length === 1){
                return {...state, todo: [{id: 1, todo: "Empty", completed: false}]};
            }else {
                return {...state, todo: state.todo.filter(todo => todo.id !== action.payload)};
            }
        case 'toggle':
            return {...state, todo: state.todo.map(todo => todo.id === action.payload? {...todo, completed: !todo.completed}: todo)};
        case 'show/completed':
            return {...state, show: 'completed'};
        case 'show/remaning':
            return {...state, show: 'remaning'};
        case 'show/all':
            return {...state, show: 'all'};
        default:
            return state;
    }
}
const store = createStore(counterReducer);

export default store;
