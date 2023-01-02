import { TextCard } from "components/TextCard/TextCard";
import { useDispatch } from "react-redux";
import { deleteNote } from "store/NoteSlice/noteSlice";
import { NoteAPI } from "api/notes-api";
import { useNavigate } from "react-router-dom";

export function NoteList({notes}) {

    const navigate = useNavigate();
    const navigateToNote = (note)=> navigate(`/note/${note}`);

    // Delete note redux && database
    const dispatch = useDispatch();
    const removeNote =  (note) => {
        if(window.confirm('Delete note?')) {
            NoteAPI.deleteNote(note.id);
            dispatch(deleteNote(note))
        }
    }

    return (
        <div className="d-grid category_notes">
            {notes.map(note=> {
                return (
                    <TextCard 
                        title={note.title}
                        date={note.created_at}
                        content={note.content}
                        key={note.id}
                        onClickTrash={() => removeNote(note)}
                        onClick = {() => navigateToNote(note.id)}
                    />
                )
            })}
        </div>    
    )
}