import { legacy_createStore as createStore } from 'redux';
import rootReducer from './rootReducer';

export interface ICounterReducer {
    num: number;
    incrementCount: number;
    decrementCount: number;
}

export interface IStore {
    counterReducerState: ICounterReducer
}


const store = createStore(rootReducer);
export default store;