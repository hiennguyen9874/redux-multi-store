import { createContext } from "react";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ReactReduxContextValue,
  createStoreHook,
  createDispatchHook,
  createSelectorHook,
} from "react-redux";

type ThemeStateType = {
  theme: string;
};

const initState: ThemeStateType = {
  theme: "tomato",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<string>) => {
      state.theme = payload;
    },
  },
});

const reducer = themeSlice.reducer;

const store = configureStore({
  reducer: reducer,
});

const context = createContext<ReactReduxContextValue>({
  store,
  storeState: reducer,
});

export const { setTheme } = themeSlice.actions;
export const useThemeStore = createStoreHook(context);
export const useThemeDispatch = createDispatchHook(context);
export const useThemeSelector = createSelectorHook(context);

export { store, context };
