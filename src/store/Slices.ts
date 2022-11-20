import { addRemoveElementKanban, AddORRemove } from "./Utils";

/**
 * Title reducer
 * Does two thing,
 * one: it changes the title according to the page it is in
 * two: changes the link to the page according to the page it is in
 * Available action/type: title/change
 */
const titleState = {
    current: {
        title: "Todo List", path: "/"
    },
    next: {
        title: "Kanban App", path: "/kanban"
    }
}
const TitleReducer = (state = titleState, action: {type: string}) => {
    switch(action.type){
        case 'title/change':
            return { current: state.next, next: state.current }
        default:
            return state;
    }
}


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
    }
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




//--Data type
// For individual Todo
type todoType = {
    id: string,
    Task: string,
    Due_Date: string
}
// For Kanban data set
type kanbanType = {
    todoList: {
        title: string, items: Array<todoType>
    },
    inProgressList: {
        title: string, items: Array<todoType>
    },
    completedList: {
        title: string, items: Array<todoType>
    }
}
//--Data type

const data: Array<todoType> = [
    {
      id: "1",
      Task: "Create PR for the Task",
      Due_Date: "25-May-2021",
    }
  ];

// Kanban Data Set
export const kanbanDataSet: kanbanType = {
    todoList: {
        title: "Todo List",
        items: data
    },
    inProgressList: {
        title: "In Progress List",
        items: []
    },
    completedList: {
        title: "Completed List",
        items: []
    }
}

/**
 * Reducer Numbro Dos
 * This reducer is used to manipulate the knaban list
 * Available list of action/type: kanban/add, kanban/remove, kanban/reorder
 * kanban/add: adds a specific activity/item to a specific table.
 * kanban/remove: removes a specific activity from the kanban data set.
 * kanban/order: reorders the kanban data set. 
 */

/**
 * Some more infomation about the payload for different action type
 * kanban/add => payload will contain {element, column}
 * element is the element to be added to the column.
 * column is the name of the column to add the new element.
 * ------------------------------------------------------
 * kanban/remove => payload will contain {element, column}
 * element is the element to be removed. 
 * column is the name of the column from which the element is to be removed.
 * ------------------------------------------------------
 * kanban/order => payload will contain {newState}
 * newState is the new state of the kanban data set.
 */
//Kanban prop type
type addRemoveType = { element: todoType, column: string };
type kanbanPayloadType = addRemoveType | { newState: kanbanType };
//Kanban Reducer
const KanbanReducer = (state = kanbanDataSet, action: {type: string, payload: kanbanPayloadType}) => {
    switch(action.type){
        case 'kanban/add':
            if("element" in action.payload){
                return addRemoveElementKanban(state, action.payload, AddORRemove.ADD);
            }
            break;
        case 'kanban/remove':
            if("element" in action.payload){
                return addRemoveElementKanban(state, action.payload, AddORRemove.REMOVE)
            }
            break;
        case 'kanban/order':
            if("newState" in action.payload){
                return action.payload.newState;
            }
            break;
        default:
            return state;
    }
}


//Exporting both the reducers
export { KanbanReducer, TodoListReducer, TitleReducer };
export type { kanbanType, addRemoveType };