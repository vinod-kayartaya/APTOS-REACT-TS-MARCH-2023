import axios from "axios";
import { Dispatch } from "redux";
import { brandsUrl, categoriesUrl, productsUrl } from "../urls";
import { FETCH_BRANDS, FETCH_BRANDS_ERROR, FETCH_CATEGORIES, FETCH_CATEGORIES_ERROR, FETCH_PRODUCTS, FETCH_PRODUCTS_ERROR } from "./actionTypes";

export function fetchProducts() {
    // the return value from fetchProducts() is collected by 'thunk',
    // and it passes the 'dispatch' method as an argument, so that we can use the same,
    // after we fetch data from the api service.
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

export const fetchProductsByBrand = (brand: string) => async (dispatch: Dispatch) => {
    try {
        const resp = await axios.get(productsUrl, { params: { brand } });
        dispatch({ type: FETCH_PRODUCTS, payload: resp.data })
    }
    catch (err) {
        dispatch({ type: FETCH_PRODUCTS_ERROR, payload: err })
    }
}

export const fetchProductsByCategory = (category: string) => async (dispatch: Dispatch) => {
    try {
        const resp = await axios.get(productsUrl, { params: { category } });
        dispatch({ type: FETCH_PRODUCTS, payload: resp.data })
    }
    catch (err) {
        dispatch({ type: FETCH_PRODUCTS_ERROR, payload: err })
    }
}

export const fetchCategories = () => async (dispatch: Dispatch) => {
    try {
        const resp = await axios.get(categoriesUrl);
        dispatch({ type: FETCH_CATEGORIES, payload: resp.data })
    }
    catch (err) {
        dispatch({ type: FETCH_CATEGORIES_ERROR, payload: err })
    }
}

export const fetchBrands = () => async (dispatch: Dispatch) => {
    try {
        const resp = await axios.get(brandsUrl);
        dispatch({ type: FETCH_BRANDS, payload: resp.data })
    }
    catch (err) {
        dispatch({ type: FETCH_BRANDS_ERROR, payload: err })
    }
}