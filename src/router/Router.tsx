import { Routes, Route } from "react-router-dom";
import KanbanContainer from "../kanbanComponents/KanbanContainer";
import TodoSection from "../todoComponents/TodoSection";

const Router = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<TodoSection/>}/>
                <Route path="/kanban" element={<KanbanContainer/>}/>
                <Route path="/*" element={
                    <div>404 page not found</div>
                }/>
            </Routes>
        </>
    );
}

export default Router;