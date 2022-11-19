import styled from "styled-components";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

//Styled components
const Container = styled.div`
    width: 800px;
    margin: 0 auto;
    margin-top: 50px;
    padding: 30px;
    background: rgba(200, 200, 200, 0.1);
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
//Styled components

const TodoSection = () => {
    return(
        <Container>
            <AddTodo />
            <TodoList />
        </Container>
    );
}

export default TodoSection;