import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
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
const Title = styled.div`
    font-size: 2rem;
    color: ${(props:any) => props.selected ? "white": "rgba(200,200,200,0.3)" };
    text-transform: capitalize;
    cursor: ${(props:any) => props.selected ? "auto": "pointer" };
    &:hover{
        color: ${(props:any) => props.selected ? "white": "teal" };
    }
`

//Styled Components

const Header = () => {
    const dispatch = useDispatch();
    const title = useSelector((state: any) => state.title);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if(location.pathname !== title.current.path){
            dispatch({type: 'title/change'})
        }
    }, []);
    const handleNavigate = () => {
        navigate(title.next.path);
        dispatch({type: 'title/change'});
    }

    return(
        <HeaderContainer>
            <Title selected={true}>{title.current.title}</Title>
            <Title onClick={handleNavigate} selected={false}>{title.next.title}</Title>
        </HeaderContainer>
    );
}

export default Header;