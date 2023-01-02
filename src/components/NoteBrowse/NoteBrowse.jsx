import { NoteList } from "components/NoteList/NoteList";
import { useState } from "react";
import { Search } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import hljs from 'highlight.js';


export function NoteBrowse (props) {
    const [searchValue, setSearchValue] = useState('');
    const notes = useSelector((store) => (store.noteSlice.noteList));
    const filterNote = notes.filter(note => {
            const containsTitle = note.title.trim().toUpperCase().includes(searchValue.trim().toUpperCase())
            const containsContent = note.content.trim().toUpperCase().includes(searchValue.trim().toUpperCase());
            return containsTitle || containsContent
        }
        )


    return (
        <div>
            <div className="position-relative search_wrapper form-outline d-flex align-items-center gap-3 py-4 col-md-4">
                <Search className="search-icon"/>
                <input defaultValue={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="search" id="form1" className="form-control" />
            </div>
            <NoteList notes = {filterNote}/>
        </div>
    ) 
};