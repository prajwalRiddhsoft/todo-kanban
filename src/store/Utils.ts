import type { addRemoveType, kanbanType } from "./Slices";

//Enum 
export enum AddORRemove {
    ADD = 'add',
    REMOVE = 'remove'
}


// Add Remove handler function
export const addRemoveElementKanban = (state: kanbanType, payload: addRemoveType, type: AddORRemove) => {
    let {element, column} = payload;
    let columnAndName = Object.entries(state).filter(([name, value]: [string, any]) => name === column);
    if(columnAndName.length > 0){
        let updatedColumn = columnAndName[0][1];

        switch(type){
            case AddORRemove.ADD: 
                updatedColumn = {
                    ...updatedColumn,
                    items: [...updatedColumn.items, element]
                }
        
                return { ...state, [column]: updatedColumn };
            case AddORRemove.REMOVE:
                let newItems = updatedColumn.items.filter((item: any) => item.id !== element.id);
                updatedColumn = {
                    ...updatedColumn,
                    items: newItems
                }
        
                return { ...state, [column]: updatedColumn };
            default:
                return state;
                
        }
    }
    return state;
}