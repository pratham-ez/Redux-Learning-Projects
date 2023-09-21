import React, { useEffect } from "react";
import "./NotesList.css";
import { useDispatch , useSelector} from "react-redux";
import { fetchNoteAction , deleteNoteAction } from "../redux/action/notesAction";

const NotesList = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchNoteAction());
  },[]);
  

  const data  = useSelector(storeData => {
    return storeData.notes;
  })

  console.log(data);
  return (
    <>
      <h1>Notes List</h1>
       
       {data.map(note=>(
        <div key={note.id} className="item-container">
        <div className="item-content">
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <button  onClick = {() => dispatch(deleteNoteAction(note.id))}>
           Delete
          </button>
        </div>
      </div>
       ))}
      
    </>
  );
};

export default NotesList;
