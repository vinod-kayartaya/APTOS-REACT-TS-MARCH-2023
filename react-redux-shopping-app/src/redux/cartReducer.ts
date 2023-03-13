import { LineItem } from "./datatypes";

interface CartState {
    cart: Array<LineItem>
}
interface CartAction {
    type: string;
    payload?: any;
}

const initialState = {
    cart: []
}

const cartReducer = (state: CartState = initialState, action: CartAction) => {
    return { ...state }
}

export default cartReducer;