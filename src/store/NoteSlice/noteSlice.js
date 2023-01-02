import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: [],
  },
  reducers: {
    setNoteList: (currentSlice, action) => {
      currentSlice.noteList = action.payload;
    },
    addNote: (currentSlice, action) => {
      currentSlice.noteList.push(action.payload);
    },
    deleteNote: (currentSlice, action) => {
      const filteredNoteList = currentSlice.noteList.filter(
        (note) => note.id !== action.payload.id
      );
      currentSlice.noteList = filteredNoteList;
    },
    updateNote: (currentSlice, action) => {
      const indexToUpdate = currentSlice.noteList.findIndex(
        (note) => note.id === action.payload.id
      );
      currentSlice.noteList[indexToUpdate] = action.payload;
    },
  },
});

export const { setNoteList, addNote, findNote, deleteNote, updateNote } =
  noteSlice.actions;
export const noteReducer = noteSlice.reducer;
