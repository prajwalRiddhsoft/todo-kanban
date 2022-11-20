import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";
import {AddRemoveBtn} from "./Column";

//Styled Component
const Container = styled.ul`
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(100,100,100, 0.3);
    border-radius: 3px;
    display: flex; justify-content: space-between;
    align-items:center;
    gap: 10px;
`;
//Styled Component

const ColumnItems = ({item, index, handleDelete} : {item: any, index: number, handleDelete: (value: any) => void}) => {
    return(
        <Draggable key={item.id} draggableId={item.id} index={index}>
            {
                (provided: any) => (
                    <Container
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div>
                            <p>{item.Task}</p>
                            <p>{item.Due_Date}</p>  
                        </div>
                        <AddRemoveBtn bg="#f73939" onClick={handleDelete}>Del</AddRemoveBtn>
                    </Container> 
                )
            }
        </Draggable>
    );
}

export default ColumnItems;