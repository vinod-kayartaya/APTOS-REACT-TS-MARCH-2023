import { configureStore } from "@reduxjs/toolkit";
import contactReducer from './contactSlice';

const store = configureStore({
    reducer: {
        contactReducerState: contactReducer
    }
});

export default store;
export type RootStoreType = ReturnType<typeof store.getState>;
