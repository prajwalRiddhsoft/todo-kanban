import styled from "styled-components";
import { DragDropContext, Droppable  } from "react-beautiful-dnd";
import Column from "./Column";
import { onDragEnd } from "./KanbanUtilFunction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//Styled Component
const Container = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    gap: 30px;
    justify-content: space-between;
    align-items: start;
`;
//Styled Component

const Kanban = () => {
    const kanbanData = useSelector((state: any) => state.kanbanList);
    const dispatch = useDispatch();
    return(
        <>
            <DragDropContext onDragEnd={(result:any) => onDragEnd(result, kanbanData, dispatch)}>
                <Container>
                    {
                        Object.entries(kanbanData).map(([columnId, column], index) => (
                            <Droppable droppableId={columnId} key={columnId}>
                                {
                                    (provided: any) => (
                                        <Column provided={provided} column={column} columnId={columnId}/>
                                    )
                                }
                            </Droppable>
                        ))
                    }
                </Container>
            </DragDropContext>
        </>
        
    );
}

export default Kanban;