import { DialogContent, DialogActions, Box, TextField, Slider, Typography } from "@mui/material";
import { AddRemoveBtn } from "./Column";


export const DialogActionSection = ({handleClose}: {handleClose: ()=>void}) => {
    return(
        <DialogActions sx={{display: "flex", gap:"20px", justifyContent:"center", alignItems:"center"}}>
            <AddRemoveBtn bg="#f73939" modalBtn={true} onClick={handleClose}>Cancel</AddRemoveBtn>
            <AddRemoveBtn bg="#21d185" modalBtn={true} type="submit">Add Item</AddRemoveBtn>
        </DialogActions>
    )
}


type DialogueContentPropType = {
    column: string, setColumn: (value:any) => void, todoTitle: string, setTodoTitle: (value:any) => void, allColumns: Array<string> 
}
export const DialogueContentSection = ({column, setColumn, todoTitle, setTodoTitle, allColumns}: DialogueContentPropType) => {
    const handleOnChange = (e:any) => {
        setTodoTitle(e.target.value);
    }
    return(
        <DialogContent sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px", padding: "40px"}}>
            <TextField value={todoTitle} onChange={handleOnChange} label="Enter Title" variant="outlined" sx={{width: "100%"}} required/>
            <ColumnOption column={column} setColumn={setColumn} allColumns={allColumns}/>
        </DialogContent>
    );
}

type ColumnOptionProptype = {
    column: string, setColumn: (value:any) => void, allColumns: Array<string>
}
const ColumnOption = ({column, setColumn, allColumns}: ColumnOptionProptype) => {
    const marks = [
        {
            value: 1,
            label: "Todo"
        },
        {
            value: 2,
            label: "In Progress"
        },
        {
            value: 3,
            label: "Completed"
        }
    ];

    const defaultValue = allColumns.indexOf(column) + 1;

    const handleOnChange = (e:any) => {
        setColumn(allColumns[Number(e.target.value) - 1]);
    }
    return(
        <Box sx={{width: "90%"}}>
            <Typography sx={{fontSize: "1.1rem"}}>Select Column</Typography>
            <Slider
                aria-label="Select Column"
                defaultValue={defaultValue}
                step={1}
                marks={marks}
                min={1}
                max={3}
                valueLabelDisplay="off"
                onChange={handleOnChange}
            />
        </Box>
    );
}