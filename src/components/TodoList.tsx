import { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";

const AddTodo = () => {
    const [text, setText] = useState(""); 
    const todo = useSelector((state: {show:string,todo:Array<any>}) => state.todo);
    const dispatch = useDispatch();
    const handleSubmit = (e:any) => {
        e.preventDefault();
        let id = todo.length > 0? todo.reduce((current, prev) => current.id > prev.id? current: prev).id + 1: 1;
        let tempTodo = {
            id: id,
            todo: text,
            completed: false
        }
        setText("");
        dispatch({type: 'add', payload: tempTodo});
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={text} onChange={(e) => setText(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

const TodoList = () => {
    const dispatch = useDispatch();
    const {todo, show} = useSelector((state: {todo: Array<any>, show: string}) => state);

    const handleOnClick = (id: number) => {
        dispatch({type: 'remove', payload: id})
    }
    const handleToggle = (id: number) => {
        dispatch({type: 'toggle', payload: id})
    }
    const getTodoList = () => {
        return show === 'all' ? todo: 
                show === 'completed' ?
                todo.filter(todo => todo.completed):
                todo.filter(todo => todo.completed === false)

    }
    return(
        <div>
            <h1>Your Todo List</h1>
            {
                getTodoList().map(todo => (
                    <div key={todo.id}>
                        <p>{todo.todo}</p>
                        <button onClick={() => handleOnClick(todo.id)}>Remove</button>
                        <div style={{display: "flex", gap: "10px"}}>
                            <label>Completed</label>
                            <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}



const ShowOptions = ({show, setShow}: {show: string, setShow: (value:any) => void}) => {
    return(
        <div style={{display:"flex", gap: "10px"}}>
            <CustBtn selected={show === 'all'} text="ALL" handleOnClick={() => setShow('all')} />
            <CustBtn selected={show === 'completed'} text="COMPLETED" handleOnClick={() => setShow('completed')} />
            <CustBtn selected={show === 'remaning'} text="REMANING" handleOnClick={() => setShow('remaning')} />
        </div>
    )
}

const CustBtn = ({selected, text, handleOnClick}:{selected: boolean, text: string, handleOnClick: () => void}) => {
    return(
        <>
        {
            selected?
            <button style={{background: "black", color: "white"}} onClick={handleOnClick}>{text}</button>
            :
            <button onClick={handleOnClick}>{text}</button>

        }
        </>
    );
}

export {TodoList, AddTodo, ShowOptions};