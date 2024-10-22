// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";
import Data from "./data.json";

// Create a slice for managing items
const itemsSlice = createSlice({
  name: "items",
  initialState: [Data],
  reducers: {
    addItem: (state, action) => {
      state.push({ title: action.payload });
    },
  },
});

// Export the action creator
export const { addItem } = itemsSlice.actions;

// Configure the store
const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
});

export default store;
