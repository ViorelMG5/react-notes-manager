import { NoteAPI } from "api/notes-api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNoteList } from "store/NoteSlice/noteSlice";
import { addNote } from "store/NoteSlice/noteSlice";

export function NoteCreate({props}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitForm = async (formValues) => {
        const newNote = await NoteAPI.create({
            ...formValues, 
            created_at: new Date().toLocaleDateString()
        })
        dispatch(addNote(newNote))
        // alert(JSON.stringify(formValues))
        alert('Note has been created')
        navigate('/')
    }

    return (
        <>
            <NoteForm 
                submitNote={submitForm}
                title="New note"
            />
        </>
    ) 
};