import { FETCH_BRANDS, FETCH_CATEGORIES, FETCH_PRODUCTS } from "./actionTypes";
import { Product } from "./datatypes";

const initialState = {
    products: [],
    brands: [],
    categories: []
}

interface State {
    products: Array<Product>,
    categories: Array<string>,
    brands: Array<string>
}

interface Action {
    type: string;
    payload?: any;
}

const productReducer = (state: State = initialState, action: Action) => {
    console.log('productReducer called with action', action);

    if (action.type === FETCH_PRODUCTS) {
        return { ...state, products: action.payload }
    }
    if (action.type === FETCH_BRANDS) {
        return { ...state, brands: action.payload }
    }
    if (action.type === FETCH_CATEGORIES) {
        return { ...state, categories: action.payload }
    }

    return { ...state };
}

export default productReducer;