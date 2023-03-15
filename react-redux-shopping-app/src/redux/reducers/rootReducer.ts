import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import ordersReducer from "./ordersReducer";

const rootReducer = combineReducers({
    productReducerState: productReducer,
    cartReducerState: cartReducer,
    authReducerState: authReducer,
    ordersReducerState: ordersReducer
});

export default rootReducer;