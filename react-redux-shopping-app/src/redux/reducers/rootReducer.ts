import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    productReducerState: productReducer,
    cartReducerState: cartReducer
});

export default rootReducer;