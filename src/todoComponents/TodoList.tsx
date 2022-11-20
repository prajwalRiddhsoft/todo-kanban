import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//React beautiful Drag and drop
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
//React beautiful Drag and drop
import styled from "styled-components";
import { stateType } from "../store/Slices";

//Styled components
const Container = styled.ul`
    display: flex; flex-direction: column;
    gap: 1rem;
`;
const TodoContainer = styled.li`
    display: flex; width: 100%;
    justify-content: space-between;
    align-items:center;
    padding: 10px;
    gap: 20px;
    border: 1px solid rgba(100,100,100, 0.5);
    border-radius: 3px;
`;
const RemoveBtn = styled.button`
    padding: 10px;
    font-size: 1rem;
    border: 2px solid rgb(100,100,100);
    border-radius: 5px;
    color: white;
    background: red;
    cursor: pointer;

    &:hover{
        background: green;
    }
    &:active{
        transform: scale(1.01);
        background: purple;
    }

`;
//Styled components

const TodoList = () => {
    const dispatch = useDispatch();
    const todoList: stateType = useSelector((state: {todoList: stateType}) => state.todoList );
    const handleOnDragEnd = (result:any) => {
        let tempArray = Array.from(todoList);
        let [movedItem] = tempArray.splice(result.source.index,1);
        tempArray.splice(result.destination.index, 0, movedItem);
        dispatch({type: 'todo/order', payload: tempArray})
    }
    return(
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="todoList">
                {(provided: any) => (
                    <Container className="todoList" {...provided.droppableProps} ref={provided.innerRef}>
                        {
                            todoList.map((todo: {id: string, todo: string}, index: number)=> (
                                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                                    {
                                        (provided: any) => (
                                            <TodoContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <TodoItem todo={todo}/>
                                            </TodoContainer>
                                        )
                                    }
                                </Draggable>
                            ))
                        }
                        {provided.placeholder}
                    </Container>
                )}
            </Droppable>                
        </DragDropContext>
    );
}

const TodoItem = ({todo}: {todo: {id: string, todo: string}}) => {
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch({type: 'todo/remove', payload: todo});
    }
    return(
        <>
            <p>{todo.todo}</p>
            <RemoveBtn onClick={handleRemove}>Remove</RemoveBtn>
        </>
    );
}

export default TodoList;