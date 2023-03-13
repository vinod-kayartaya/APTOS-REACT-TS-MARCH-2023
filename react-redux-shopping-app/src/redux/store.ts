import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootStoreType = ReturnType<typeof store.getState>;

export default store;