import { createSlice } from "@reduxjs/toolkit";
import { noteProp } from "../type";

const initialState: /* noteProp*/ any[] = [];

export const NotesSlice = createSlice({
  name: "allNotes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const AP: noteProp = action.payload;

      if (AP.heading.trim() === "") {
        const newHead: String = AP.content.split(" ")[0];
        state.push({ ...AP, heading: newHead });
      } else {
        state.push(action.payload);
      }
    },
  },
});
export const notesState = (state: any) => state.notesSlice;
export const { addNote } = NotesSlice.actions;
export default NotesSlice.reducer;
