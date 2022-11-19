/**
 * The reducer is used to manipulate the todo list
 * Available list of action/type: todo/add, todo/remove, todo/reorder
 * todo/add: adds a specific todo item in the todo list
 * todo/remove: removes a specific todo from the list
 * todo/order: re-arranges the todo list
 */

// Initial State
export type stateType = Array<{id: string, todo: string}>;
const initialState: stateType = [
    {
        id: '1a', todo: 'Take out the trash'
    },
    {
        id: '2a', todo: 'Make your bed'
    },
    {
        id: '3a', todo: 'Clean your desk'
    },
    {
        id: '4a', todo: 'Use react beautiful d&d'
    },
    {
        id: '5a', todo: 'Implemented it like a boss'
    },
    {
        id: '6a', todo: 'No YouTube for the day'
    },
];
//Reducer No 1
const TodoListReducer = (state = initialState, action: {type: string, payload?: any} ) => {
    switch(action.type){
        case 'todo/add':
            return [...state, action.payload];

        case 'todo/remove':
            return state.filter(todo => todo.id !== action.payload.id);

        case 'todo/order':
            return [...action.payload];

        default:
            return state;
    }
}


export { TodoListReducer };