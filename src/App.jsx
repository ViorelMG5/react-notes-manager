import { Outlet } from "react-router-dom";
import { Header } from "components/Header/Header";
import { useEffect, useCallback } from "react";
import { NoteAPI } from "api/note-api";
import { useDispatch } from "react-redux";
import { setNoteList } from "store/notes/notes-slice";

export function App() {
  const dispatch = useDispatch();

  const fetchNotes = useCallback(async () => {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }, [dispatch]);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return (
    <div>
      <Header />
      <div style={{ padding: 50 }}>
        <Outlet />
      </div>
    </div>
  );
}
