import { legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);
export type RootStoreType = ReturnType<typeof store.getState>;

export default store;