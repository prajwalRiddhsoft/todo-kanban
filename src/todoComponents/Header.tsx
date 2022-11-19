import styled from "styled-components";


//Styled Components
const HeaderContainer = styled.div`
    display: flex;
    padding: 20px 50px;
    background: black;
    color: white;
    width: 100%;
    gap: 50px;
    justify-content: center;
`;
//Styled Components

const Header = () => {
    return(
        <HeaderContainer>
            <h1>Todo Application Using React beautiful D&D</h1>
        </HeaderContainer>
    );
}

export default Header;