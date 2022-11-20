//On Drag end function
export const onDragEnd = (result: any, data: any, dispatch: (value:any) => void) => {
    if(result.destination){
        //When moved in the same column
        if(result.source.droppableId === result.destination.droppableId){
            handleSameColumn(result.source, result.destination, data, dispatch);
        }
        //When moved to separate column
        else{
            handleDifferentColumn(result.source, result.destination, data, dispatch);
        }
        
    }
}
//On Drag end function

//When the list item is moved inside the same column
const handleSameColumn = (source: any, destination: any, data: any, dispatch: (value: any) => void) => {
    if(source.index !== destination.index){
        //Making a copy of the list
        let originalList = Array.from(data[source.droppableId].items);
        //Removing the moved item from the list
        let movedItem = originalList.splice(source.index,1)[0];
        //Adding it to the desired index
        originalList.splice(destination.index, 0, movedItem);
        //Updating the kanban data set
        let newKanbanData = {
            ...data,
            [source.droppableId]: {...data[source.droppableId], items: originalList},
        };
        
        dispatch({type: 'kanban/order', payload: { newState: newKanbanData}})
    }    
}


//When the list item is moved to a different columns
const handleDifferentColumn = (source: any, destination: any, data: any, dispatch: (value: any) => void) => {
    
    let originalList = Array.from(data[source.droppableId].items);
    let movedItem = originalList.splice(source.index, 1)[0];
    // At This point we have grabbed the moved item And removed it from its original list


    // Now to add it to it's destination list
    let destinationList = Array.from(data[destination.droppableId].items);
    destinationList.splice(destination.index, 0, movedItem);

    //Now updating the kanban data with the updated lists
    let newKanbanData = {
        ...data,
        [source.droppableId]: {...data[source.droppableId], items: originalList},
        [destination.droppableId]: {...data[destination.droppableId], items: destinationList}
    };

    dispatch({type: 'kanban/order', payload: { newState: newKanbanData}})
}