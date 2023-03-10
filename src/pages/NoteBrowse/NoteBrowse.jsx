// import { TextCard } from "components/TextCard.jsx/TextCard";
import { SearchBar } from "components/SearchBar/SearchBar";
import { NoteList } from "containers/NoteList/NoteList";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

export function NoteBrowse({ props }) {
  const noteList = useSelector((store) => store.noteSlice.noteList);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNoteList = noteList.filter((note) => {
    const containsTitle = note.title
      .trim()
      .toUpperCase()
      .includes(searchTerm.trim().toUpperCase());
    const containsContent = note.content
      .trim()
      .toUpperCase()
      .includes(searchTerm.trim().toUpperCase());
    return containsTitle || containsContent;
  });

  return (
    <>
      {noteList?.length !== 0 && (
        <div className="row justify-content-center mb-5">
          <div className="col-sm-12 col-md-4">
            <SearchBar
              onTextChange={setSearchTerm}
              placeholder="Search your notes..."
            />
          </div>
        </div>
      )}
      {noteList?.length === 0 && (
        <div className="text-center">
          You don't have any note, do you want to{" "}
          <Link to="/note/new">create one?</Link>
        </div>
      )}
      <NoteList noteList={filteredNoteList} />
    </>
  );
}
