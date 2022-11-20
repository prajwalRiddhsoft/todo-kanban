import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Dialog, DialogTitle, Box } from "@mui/material";
import { DialogueContentSection, DialogActionSection } from "./AddModalSubComponents";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


//Utility Function
const getAllColumns = (data: any) => {
    return Object.keys(data);
}
//Utility Function

const AddKanbanModal = ({open, setOpen}: {open: boolean, setOpen: (value:any) => void}) => {
    //Used to access store
    const dispatch = useDispatch();
    const kanbanData = useSelector((state:any) => state.kanbanList);
    //Used to access store

    //Some useful data
    const allColumns = getAllColumns(kanbanData);
    //Some useful data

    const [todoTitle, setTodoTitle] = useState("");
    const [column, setColumn] = useState(allColumns[0]);

    const handleClose = () => setOpen(false);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(allColumns)
        if(todoTitle !== ""){
            let id = uuidv4();
            let date = new Date();
            let newElement = {
                id: id,
                Task: todoTitle,
                Due_Date: date.toString()
            }
            dispatch({ type: 'kanban/add', payload: { element: newElement, column: column}})
        }
    }


    return(
        <Dialog 
            open={open}
            onClose={handleClose}
            maxWidth="md"
            fullWidth={false}
            aria-labelledby="alert-dialog-new-customer-type"
            aria-describedby="modal for selecting new customer type"
        >
            <DialogTitle sx={{fontSize: "2rem", minWidth: "600px", textAlign: "center"}}>Add a new item in Kanban</DialogTitle>

            <Box sx={{width: "100%", background: "rgba(200,200,200, 0.5)", height:"1px"}}></Box>

            <Box component={"form"} onSubmit={handleSubmit}>
                <DialogueContentSection 
                    todoTitle={todoTitle} setTodoTitle={setTodoTitle}
                    column={column} setColumn={setColumn}
                    allColumns={allColumns}
                />
                <DialogActionSection handleClose={handleClose} />
            </Box>
        </Dialog>
    );
}

export default AddKanbanModal;