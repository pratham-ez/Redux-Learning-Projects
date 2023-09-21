import { ADD_NOTE ,DELETE_NOTE ,FETCH_NOTE} from "./actionConstants"

// add note 
export const addNoteAction = (note) =>{
    return{
        type: ADD_NOTE,
        payload:note,
    }
}

// delete node 
export const deleteNoteAction = (id) =>{
    return{
        type: DELETE_NOTE,
        payload:id,
    }
}

// fetch all notes
export const fetchNoteAction = () =>{
    return{
        type: FETCH_NOTE,
    }
} 
