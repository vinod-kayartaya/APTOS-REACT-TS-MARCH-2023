import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

// check if the localStorage has previous state of the store
const savedState = localStorage.getItem('reduxState');
const preloadState = savedState ? JSON.parse(savedState) : {};
const store = createStore(rootReducer, preloadState, applyMiddleware(thunk));

// check the file src/types/index.d.ts
window.mystore = store;

export type RootStoreType = ReturnType<typeof store.getState>;

// keep updating the localStorage with store's state everytime there is a change in the store's state
store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;