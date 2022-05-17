import { configureStore } from "@reduxjs/toolkit";
import NotesSlice from "../features/notesSlice";
/*import dataReducer from '../features/dataSlice'
import cartReducer from '../features/cartSlice'*/

export const store = configureStore({
  reducer: {
    notesSlice: NotesSlice,
    /*data: dataReducer,
        cart: cartReducer*/
  },
});
