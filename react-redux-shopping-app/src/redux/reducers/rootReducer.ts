import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    productReducerState: productReducer,
    cartReducerState: cartReducer,
    authReducerState: authReducer
});

export default rootReducer;