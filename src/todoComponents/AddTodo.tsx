import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import type { stateType } from "../store/Slices";

//Styled components
const Container = styled.form`
    width: 100%;
    display: flex;
`;
const CustBtn = styled.button`
    display: block; width: 100px;
    padding: 10px; background: white;
    border: 2px solid rgb(88,88,88);
    font-size: 1.3rem;
    transition: 200ms;
    cursor: pointer;
    &:hover{
        border: 2px solid #9844f2;
        color: #9844f2;
    }
    &:active{
        background: #9844f2;
        color: white;
    }
`;
const CustInput = styled.input`
    flex-grow: 1;
    border: 2px solid rgb(88,88,88);
    font-size: 1.7rem;
    padding: 10px 1rem;
    &:focus{
        outline: none;
        border: 2px solid #9844f2;
    }
`;
//Styled components

const AddTodo = () => {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const todoList: stateType = useSelector((state:{ todoList: stateType}) => state.todoList);

    const calculateId = () => {
        if(todoList.length === 0) return '1a';

        let lastId = todoList.reduce((current,prev) => {
            let id1 = Number(current.id.split('a')[0]);
            let id2 = Number(prev.id.split('a')[0]);

            return id1 > id2? current: prev
        });

        return `${Number(lastId.id.split('a')[0]) + 1}a`;
    }

    const handleSubmit =  (e: any) => {
        e.preventDefault();
        let id: string = calculateId();
        const newTodo = {id: id, todo: todo};
        dispatch({type: 'todo/add', payload: newTodo});
        setTodo("");
    }

    return(
        <Container onSubmit={handleSubmit}>
            <CustInput 
                type="text" placeholder="Enter a todo..."
                value={todo}
                onChange={(e:any) => setTodo(e.target.value)}
            />
            <CustBtn type="submit">Add</CustBtn>
        </Container>
    );
}

export default AddTodo;