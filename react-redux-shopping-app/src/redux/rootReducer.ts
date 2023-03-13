import { combineReducers } from "redux";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    productReducerState: productReducer
})

export default rootReducer;