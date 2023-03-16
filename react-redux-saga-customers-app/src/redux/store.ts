import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import rootSaga from "../saga/rootSaga";
import customerReducer from "./customerReducer";

const rootReducer = combineReducers({
    customerReducerState: customerReducer
});


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
export type RootStoreType = ReturnType<typeof store.getState>;
