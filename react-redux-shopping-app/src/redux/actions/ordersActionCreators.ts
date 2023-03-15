import axios from "axios";
import { ordersUrl } from "../../urls";
import { CREATE_ORDER, CREATE_ORDER_ERROR, FETCH_ORDER_HISTORY, FETCH_ORDER_HISTORY_ERROR } from "./actionTypes";
import store from "../store";
import { LineItem, Order } from "../datatypes";
import { Dispatch } from "redux";

// export const fetchOrderHistory = () => async (dispatch: Dispatch) => {
//     try {
//         const { token } = store.getState().authReducerState;
//         const resp = await axios.get(ordersUrl, { headers: { Authorization: `Bearer ${token}` } });
//         dispatch({ type: FETCH_ORDER_HISTORY, payload: resp.data });
//     }
//     catch (err: any) {
//         dispatch({ type: FETCH_ORDER_HISTORY_ERROR, payload: err.response.data });
//     }
// };


export const fetchOrderHistory = async () => {
    try {
        const { token } = store.getState().authReducerState;
        const resp = await axios.get(ordersUrl, { headers: { Authorization: `Bearer ${token}` } });
        return { type: FETCH_ORDER_HISTORY, payload: resp.data };
    }
    catch (err: any) {
        return { type: FETCH_ORDER_HISTORY_ERROR, payload: err.response.data };
    }
};

export const createOrder = (cart: LineItem[]) => async (dispatch: Dispatch) => {
    try {
        const ord: Order = {};
        ord.orderDate = new Date().toISOString();
        ord.lineItems = [...cart];
        ord.orderStatus = 'PENDING';
        const { token } = store.getState().authReducerState;
        const resp = await axios.post(ordersUrl, ord, { headers: { Authorization: `Bearer ${token}` } });
        dispatch({ type: CREATE_ORDER, payload: resp.data });
    }
    catch (err: any) {
        dispatch({ type: CREATE_ORDER_ERROR, payload: err.response.data });
    }
};