import { legacy_createStore as createStore, combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
    todoReducerState: todoReducer,
});

const store = createStore(rootReducer);
export type RootStoreType = ReturnType<typeof store.getState>;
export default store;
