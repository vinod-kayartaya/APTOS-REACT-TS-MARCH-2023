import { legacy_createStore as createStore } from 'redux';
import rootReducer from './rootReducer';

export type RootStoreType = ReturnType<typeof store.getState>;


const store = createStore(rootReducer);
export default store;