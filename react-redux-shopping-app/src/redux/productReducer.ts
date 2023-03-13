import { FETCH_PRODUCTS } from "./actionTypes";
import { Product } from "./datatypes";

const initialState = {
    products: []
}

interface State {
    products: Array<Product>
}

interface Action {
    type: string;
    payload?: any;
}

const productReducer = (state: State = initialState, action: Action) => {

    if (action.type === FETCH_PRODUCTS) {
        console.log('inside the productReducer, action is', action)
        return { ...state, products: action.payload }
    }

    return { ...state };
}

export default productReducer;