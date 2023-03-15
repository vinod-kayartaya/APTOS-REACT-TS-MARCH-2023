import { CREATE_ORDER, FETCH_ORDER_HISTORY } from "../actions/actionTypes";
import { IAction, Order } from "../datatypes";

interface IOrdersRedcuerState {
    orders: Order[];
}

const initialState: IOrdersRedcuerState = {
    orders: []
};

const ordersReducer = (state: IOrdersRedcuerState = initialState, action: IAction): IOrdersRedcuerState => {
    console.log('ordersReducer called with action', action);

    if (action.type === FETCH_ORDER_HISTORY) {
        return { ...state, orders: action.payload };
    }

    if (action.type === CREATE_ORDER) {
        const orders = [...state.orders];
        orders.push(action.payload);
        return { ...state, orders };
    }

    return { ...state };
};

export default ordersReducer;