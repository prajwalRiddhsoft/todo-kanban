import styled from "styled-components";
import Kanban from "./Kanban";
//Header we used for kanban

//Header we used

//Styled components
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 30px;
    padding-top: 60px;
    background: rgba(200,200,200,0.3);
`;
//Styled components

const KanbanContainer = () => {
    return(
        <>
            <Container>
                <Kanban/>
            </Container>
        </>
    );
}

export default KanbanContainer