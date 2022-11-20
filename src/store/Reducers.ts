import { TodoListReducer, KanbanReducer, TitleReducer } from "./Slices";

const Reducers = {
    title: TitleReducer,
    todoList: TodoListReducer,
    kanbanList: KanbanReducer
}

export default Reducers;