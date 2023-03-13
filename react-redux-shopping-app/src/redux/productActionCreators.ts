import axios from "axios";
import { Dispatch } from "redux";
import { productsUrl } from "../urls";
import { FETCH_PRODUCTS, FETCH_PRODUCTS_ERROR } from "./actionTypes";

export function fetchProducts() {
    return async function (dispatch: Dispatch) {
        try {
            const resp = await axios.get(productsUrl);
            const payload = resp.data;
            dispatch({ type: FETCH_PRODUCTS, payload })
        }
        catch (err) {
            dispatch({ type: FETCH_PRODUCTS_ERROR, payload: err })
        }
    }
}