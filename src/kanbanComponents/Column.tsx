import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import AddKanbanModal from "./AddKanbanModal";
import ColumnItems from "./ColumnItems";

//Styled Component
const Container = styled.ul`
    width: 350px;
    display: flex; gap: 5px;
    flex-direction: column;
    padding: 20px;
    background: white;
    border-radius: 10px;
`;
const Title = styled.h2`
    display: flex;
    align-items:center;
    padding: 0px 10px 10px 0px;
    justify-content: space-between;
    gap: 20px;
    font-size: 1.5rem;
`;
export const AddRemoveBtn = styled.button`
    padding: ${(props:any) => props.modalBtn? "10px 30px": "10px"};
    font-size: ${(props:any) => props.modalBtn? "1.1rem": "0.9rem"};
    color: white;
    background: ${(props: any) => props.bg};
    border: none;
    border-radius: 5px;
    border: 2px solid white;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
        color: ${(props: any) => props.bg};
        background: white;
        border: 2px solid ${(props: any) => props.bg};
    }
    &:active {
        background: ${(props: any) => props.bg};
        color: white;
    }
`;
//Styled Component

const Column = ({provided, column, columnId}: {provided:any, column:any, columnId: string}) => {
    const [openAdd, setOpenAdd] = useState(false);

    const dispatch = useDispatch();
    const handleDelete = (item: any) => {
        dispatch({type: 'kanban/remove', payload: {element: item, column: columnId}});
    }
    return(
        <>
            <Container ref={provided.innerRef} {...provided}>
                <Title>
                    <div>{column.title}</div>
                    <AddRemoveBtn bg="#21d185" onClick={() => setOpenAdd(true)}>Add</AddRemoveBtn>
                </Title>
                {
                    column.items.map((item: any, index: number) => (
                        <ColumnItems key={index} item={item} index={index} handleDelete={() => handleDelete(item, )}/> 
                    ))
                }
                {provided.placeholder}
            </Container>
            <AddKanbanModal open={openAdd} setOpen={setOpenAdd} />
        </>
    );
}

export default Column;