import { ADD_TO_CART, DECREASE_QUANTITY, EMPTY_CART, INCREASE_QUANTITY, REMOVE_FROM_CART } from "../actions/actionTypes";
import { LineItem, IAction } from "../datatypes";
interface CartState {
    cart: Array<LineItem>;
}


const initialState = {
    cart: []
};

const cartReducer = (state: CartState = initialState, action: IAction) => {
    console.log('cartReducer called with action', action);

    if (action.type === ADD_TO_CART) {
        const cart = [...state.cart];
        const li = cart.find(li => li.product.id === action.payload.id);
        if (li) return { ...state };

        cart.push({ quantity: 1, product: action.payload });
        return { ...state, cart };
    }

    if (action.type === INCREASE_QUANTITY) {
        const cart = [...state.cart];
        const li = cart.find(li => li.product.id === action.payload.id);
        if (li) {
            li.quantity++;
        }
        return { ...state, cart };
    }

    if (action.type === DECREASE_QUANTITY) {
        const cart = [...state.cart];
        const index = cart.findIndex(li => li.product.id === action.payload.id);
        if (index !== -1) {
            const li = cart[index];
            li.quantity--;
            if (li.quantity === 0) {
                cart.splice(index, 1);
            }
        }
        return { ...state, cart };
    }

    if (action.type === REMOVE_FROM_CART) {
        const cart = [...state.cart];
        const index = cart.findIndex(li => li.product.id === action.payload.id);
        if (index !== -1) {
            cart.splice(index, 1);
        }
        return { ...state, cart };
    }

    if (action.type === EMPTY_CART) {
        return { ...state, cart: [] };
    }

    return { ...state };
};

export default cartReducer;