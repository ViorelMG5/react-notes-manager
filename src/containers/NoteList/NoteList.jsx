import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextCard } from "components/TextCard.jsx/TextCard";
import { NoteAPI } from "api/note-api";
import { deleteNote } from "store/notes/notes-slice";
import s from "./style.module.css";
import uniqid from "uniqid";

export function NoteList({ noteList }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function deleteNote_(note) {
    if (window.confirm("Delete note ?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
    }
  }

  return (
    <div className={`row justify-content-center`}>
      {noteList.map((note) => {
        return (
          <div className={s.card_container}>
            <TextCard
              key={uniqid()}
              title={note.title}
              content={note.content}
              subtitle={note.created_at}
              onClick={() => navigate("/note/" + note.id)}
              onClickTrash={() => deleteNote_(note)}
            />
          </div>
        );
      })}
    </div>
  );
}
