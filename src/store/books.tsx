import { createContext } from "react";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ReactReduxContextValue,
  createStoreHook,
  createDispatchHook,
  createSelectorHook,
} from "react-redux";

type BookStateType = {
  books: string[];
};

const initState: BookStateType = {
  books: ["InitBook"],
};

const bookSlice = createSlice({
  name: "book",
  initialState: initState,
  reducers: {
    addBook: (state, { payload }: PayloadAction<string>) => {
      state.books = [...state.books, payload];
    },
  },
});

const store = configureStore({
  reducer: bookSlice.reducer,
});

const context = createContext<ReactReduxContextValue>({
  store,
  storeState: bookSlice.reducer,
});

export const { addBook } = bookSlice.actions;
export const useBooksStore = createStoreHook(context);
export const useBooksDispatch = createDispatchHook<BookStateType>(context);
export const useBooksSelector = createSelectorHook<BookStateType>(context);
export { store, context };
