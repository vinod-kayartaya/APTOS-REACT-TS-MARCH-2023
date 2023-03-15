import axios from "axios";
import { ordersUrl } from "../../urls";
import { FETCH_ORDER_HISTORY, FETCH_ORDER_HISTORY_ERROR } from "./actionTypes";
import store from "../store";

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