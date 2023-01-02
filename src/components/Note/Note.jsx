import { NoteForm } from "components/NoteForm/NoteForm";
import { NoteAPI } from "api/notes-api";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "store/NoteSlice/noteSlice";

export function Note(props) {
  const [isEditing, setIsEditable] = useState(false);

  const { noteId } = useParams();
  const note = useSelector((store) =>
    store.noteSlice.noteList.find((note) => note.id === noteId)
  );

  const handleClickEdit = () => {
    setIsEditable(!isEditing);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function deleteNote_() {
    if (window.confirm("Delete note ?")) {
      NoteAPI.deleteNote(note.id);
      dispatch(deleteNote(note));
      navigate("/");
    }
  }

  const submit = async (formValues) => {
    const updateNote = NoteAPI.updateById(note.id, formValues);
    dispatch(updateNote(updateNote));
    setIsEditable(false);
  };
  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditing}
          title={note.title}
          content={note.content}
          onClickEdit={() => handleClickEdit()}
          onClickDelete={() => deleteNote_()}
          note={note}
          submitNote={submit}
        />
      )}
    </>
  );
}
